const express = require('express');
const router = express.Router();
const multer = require('multer');
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");
const path = require('path');
const Post = require('../models/Post');
const Lead = require('../models/Lead');

// S3 Client Configuration (reused from upload.js)
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

const S3_FOLDER = process.env.AWS_S3_FOLDER ? `${process.env.AWS_S3_FOLDER}/` : 'posts/';

const storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, S3_FOLDER + file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
});

const upload = multer({ 
    storage: storage,
    limits: { 
        fileSize: 50 * 1024 * 1024, // 50MB limit for high-res sacred images
        fieldSize: 50 * 1024 * 1024  // 50MB limit for text fields
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Only images (jpeg, jpg, png, webp) are allowed"));
    }
});

// @route   POST api/posts
// @desc    Create a new post and optionally a CRM lead
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { description, userId, userName, userAvatar, postType, templeName, placeName, stateName, userEmail } = req.body;
        const imageUrl = req.file ? req.file.location : null;

        // Basic validation: Must have either a description OR an image
        if (!description?.trim() && !imageUrl) {
            return res.status(400).json({ message: "A sacred story must have either a reflection or a photo! 🙏" });
        }
        if (imageUrl) console.log("✓ S3 Image URL generated:", imageUrl);
        
        // Default temple name if missing (e.g. general devotee wall posts)
        const finalTempleName = templeName || "Spiritual Community";

        const targetLikes = Math.floor(Math.random() * 51) + 450; // Random target between 450-500
        const initialLikes = Math.floor(Math.random() * 31) + 10; // Start with 10-40 likes

        // 1. Create the Post in Devotee Wall
        const newPost = new Post({
            userId,
            userName,
            userAvatar,
            userEmail,
            templeName: finalTempleName,
            placeName,
            stateName,
            description,
            image: imageUrl,
            postType: postType || 'devotee_story',
            likes: initialLikes,
            targetLikes: targetLikes,
            status: 'approved'
        });

        const savedPost = await newPost.save();

        // 2. If it's a temple suggestion, create a Lead in CRM
        if (postType === 'temple_suggestion') {
            try {
                const newLead = new Lead({
                    leadInformation: {
                        name: userName || 'Anonymous Devotee',
                        email: userEmail || '',
                        source: 'website'
                    },
                    contactDetails: {
                        mobile: 'Not Provided', // Required by Lead model
                    },
                    templeAndDate: {
                        temple: templeName,
                        serviceType: 'other'
                    },
                    notes: [{
                        text: `Temple Suggestion: ${description}\nLocation: ${placeName}, ${stateName}\nPost ID: ${savedPost._id}`,
                        addedBy: 'System',
                        addedByName: 'Suggestion Bot'
                    }]
                });
                await newLead.save();
                console.log('✓ CRM Lead created for temple suggestion');
            } catch (leadErr) {
                console.error('✗ Error creating CRM Lead:', leadErr.message);
                // We don't fail the whole request if lead creation fails, but we log it
            }
        }

        res.status(201).json(savedPost);

    } catch (err) {
        console.error("Error sharing sacred story:", err);
        res.status(500).json({ message: "Failed to share your story. Please try again." });
    }
});

// @route   GET api/posts
// @desc    Get all posts (for Devotee Wall)
router.get('/', async (req, res) => {
    try {
        const { postType } = req.query;
        const filter = { status: 'approved' };
        
        // Only apply postType filter if provided (e.g. from CRM)
        if (postType) {
            filter.postType = postType;
        }

        const posts = await Post.find(filter).sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: "Error fetching posts" });
    }
});

// @route   POST api/posts/:id/comment
// @desc    Add a comment to a post
router.post('/:id/comment', async (req, res) => {
    try {
        const { userName, userId, userAvatar, text } = req.body;
        if (!text || !userName) {
            return res.status(400).json({ message: "User name and comment text are required" });
        }

        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const newComment = {
            userId,
            userName,
            userAvatar,
            text,
            createdAt: new Date()
        };

        post.comments.unshift(newComment); // Add to beginning of array
        await post.save();

        // Emit via Socket.io if available (optional)
        const io = req.app.get('io');
        if (io) {
            io.emit('wall_comment_global', { postId: req.params.id, comment: newComment });
        }

        res.status(201).json([newComment]); // Return as array to match frontend expectation
    } catch (err) {
        console.error("Error adding comment:", err);
        res.status(500).json({ message: "Failed to add comment" });
    }
});

// @route   DELETE api/posts/:id/comment/:commentId
// @desc    Delete a comment if you are the author OR the post owner
router.delete('/:id/comment/:commentId', async (req, res) => {
    try {
        const { id, commentId } = req.params;
        
        // Use $pull to remove the comment sub-document
        const post = await Post.findByIdAndUpdate(
            id,
            { $pull: { comments: { _id: commentId } } },
            { new: true }
        );

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Emit via Socket.io for real-time removal
        const io = req.app.get('io');
        if (io) {
            io.emit('wall_comment_deleted', { postId: id, commentId });
        }

        res.json({ message: "🙏 Comment successfully removed." });
    } catch (err) {
        console.error("Error deleting comment:", err);
        res.status(500).json({ message: "Failed to delete comment" });
    }
});

// @route   DELETE api/posts/:id
// @desc    Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Emit via Socket.io for real-time removal
        const io = req.app.get('io');
        if (io) {
            io.emit('wall_post_deleted', req.params.id);
        }

        res.json({ message: "🙏 Post removed from the sacred wall." });
    } catch (err) {
        console.error("Error deleting post:", err);
        res.status(500).json({ message: "Failed to delete post" });
    }
});

module.exports = router;
