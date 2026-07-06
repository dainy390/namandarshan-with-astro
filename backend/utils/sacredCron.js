const cron = require('node-cron');
const Post = require('../api/models/Post');

/**
 * Sacred Heartbeat: Persistent Auto-Like System
 * This service runs every 2 minutes and identifies posts that haven't reached
 * their "Sacred Target" (450-500 likes) yet.
 * 
 * @param {Object} io - Socket.io instance for real-time broadcasts
 */
function initSacredHeartbeat(io) {
    console.log('🕉️ [Sacred Heartbeat] Initialized. Monitoring divine growth...');

    // Run every 2 minutes
    cron.schedule('*/2 * * * *', async () => {
        try {
            // Find approved posts that are below their targetLikes
            const eligiblePosts = await Post.find({
                status: 'approved',
                $expr: { $lt: ["$likes", "$targetLikes"] }
            });

            if (eligiblePosts.length === 0) return;

            console.log(`✨ [Sacred Heartbeat] Cultivating growth for ${eligiblePosts.length} posts...`);

            for (let post of eligiblePosts) {
                // Sacred Increment: add 3-7 likes each cycle to feel natural
                const increment = Math.floor(Math.random() * 5) + 3;
                const newLikes = Math.min(post.likes + increment, post.targetLikes);
                
                await Post.findByIdAndUpdate(post._id, { likes: newLikes });

                // Broadcast real-time update to all devotees on the wall
                if (io) {
                    io.emit('wall_like_global', { 
                        postId: post._id, 
                        likes: newLikes 
                    });
                }
            }
        } catch (err) {
            console.error('✗ [Sacred Heartbeat] Error during divine cultivation:', err.message);
        }
    });
}

module.exports = { initSacredHeartbeat };
