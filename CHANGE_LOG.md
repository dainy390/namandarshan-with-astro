# Change Log - Namandarshan Project

This document tracks all changes, dependencies installed, and code modifications made by Antigravity.

## [2026-04-29] - Shorts Upload Fixes & UX Enhancements

#### Fixed
- **UI Z-Index Overlap**: Implemented a **Dynamic Z-Index** for the `ShortsViewer`. It now drops to `z-40` when editing, allowing the `AlertDialogOverlay` (z-50) to properly mask the viewer. Increased `AlertDialogContent` to `z-100`. This completely resolves the "glitching" and ensures the modal is fully interactive.
- **Backend Video Mimetypes**: Updated `fileFilter` in `posts.js` to support `video/quicktime` (MOV) and `video/x-msvideo` (AVI).
- **X Button Conflict**: Explicitly hide viewer controls when the edit modal is active.
- **Backend Upload Limits**: Increased `fieldSize` to 50MB in the `uploadVideo` multer configuration.
- **Video Metadata Validation**: Fixed "Failed to load video metadata" errors in `UploadShortModal.tsx`.

#### Added
- **Intuitive Edit Icon**: Swapped the generic `Film` icon with a standard `Edit3` icon in the immersive viewer.
- **Enhanced Upload UI**: Added character counter and improved styling in `UploadShortModal.tsx`.
- **Immersive Editing**: Added a dedicated **Edit Button** within the `ShortsViewer`.

#### Refined
- **Navigation Sync**: Ensured the edit modal is properly triggered from both views.
- **State Propogation**: Corrected `isEditing` flow through the Shorts components.

## [2026-04-28] - Initial Setup and Dependency Check

- Started monitoring the project.
- Identified project roots:
  - Frontend/Main: `c:\Users\Asus\OneDrive\Documents\namandarshan-main (1)\namandarshan-main`
  - Backend/Whisperer: `c:\Users\Asus\OneDrive\Documents\namandarshan-backend\temple-whisperer-co-77f0e080`
- Reading `package.json` for both projects.
- Backend: Ran `npm install` to ensure existing dependencies are synchronized.
- Backend: Installed essential utility and security packages:
  - `morgan`: Request logging
  - `helmet`: Security headers
  - `compression`: Response compression
  - `zod`: Schema validation
  - `express-rate-limit`: Rate limiting for security
- Backend: Integrated new middleware into `server/index.js`:
  - Added `helmet` for enhanced security.
  - Added `morgan` ('dev') for better development logging.
  - Added `compression` to improve response times via Gzip.
  - Implemented `express-rate-limit` on all `/api` routes (1000 requests per 15 mins) to prevent abuse.
- Backend: Created `.env.example` to document all required environment variables for the project.
- Backend: Attempting to start the development server using `npm run dev`.

## [2026-04-28] - Referral Page & Header Update
- Added complete support for Video Uploads on Devotee Wall (Sanatan Shorts).
  - Backend: Added `uploadVideo` multer config and `POST /api/posts/shorts` endpoint to upload `.mp4`/`.mov` files to S3.
  - Frontend: Updated `UploadShortModal.tsx` to properly format and append `userId`, `userName`, and `userAvatar` when uploading videos.

- Updated `src/components/layout/Header.tsx`:
  - Changed the "Spread Sanatan Dharma" link from an external WhatsApp community link to the internal `/referral` page.
  - Replaced the `<a>` tag with the `Link` component from `react-router-dom` for better SPA navigation.
  - Removed unused `Referral` page import to clean up the code.
- Verified that the Referral page is located at `src/pages/Referral.tsx` and correctly routed in `App.tsx`.

## [2026-04-28] - Sanatan Wall Shorts Infrastructure (Part 1)

- **Frontend Enhancement (`src/pages/DevoteeWall/DevoteeWallPage.tsx`)**:
  - Implemented a tab-based navigation (All | Posts | Shorts) using Shadcn UI `Tabs`.
  - Added `activeTab` state to handle the selection.
  - Implemented client-side filtering logic for the feed:
    - **All**: Shows both traditional posts and video shorts.
    - **Posts**: Filters to show only text/image based content.
    - **Shorts**: Filters to show only video-based content (prepared for upcoming Shorts feature).
  - Enhanced responsive layout for the header section of the spiritual feed.
- **New Components Implementation**:
  - **`ShortsViewer.tsx`**: Optimized infinite video player using the **Intersection Observer API** for high-performance auto-play/pause logic. 
  - Features premium Instagram-like overlays, interactive Like/Comment/Share sidebars, and custom marquee audio labels.
  - Includes 10 curated dummy videos for a seamless testing loop.
  - **`ShortCard.tsx`**: A compact preview card for video shorts to be used in mixed feeds.
- **Upload Functionality**:
  - **`UploadShortModal.tsx`**: Implemented a secure upload modal for shorts.
  - Includes **automatic duration validation** (max 20 seconds) and file size limits (25MB).
  - Integrated with `PostCreationBox` to provide a dedicated video upload trigger for authenticated users.
- **Conditional Rendering Logic**:
  - Implemented logic to switch between the standard post feed and the dedicated Shorts scroller based on the active tab.
  ## [2026-04-28] - Sanatan Wall Shorts Infrastructure (Part 2) - Hybrid Storage & UI Fixes

- **Backend Integration (`temple-whisperer-co-77f0e080`)**:
  - **Static Video Serving**: Configured `express.static` in `server/index.js` to serve `/videos` and `/public` assets.
  - **Dynamic Model Update**: Modified `api/models/Post.js` to support `videoUrl`, `mediaType`, and a new `short` enum in `postType`.
  - **Seeding Automation**: Created `server/seed-shorts.js` to populate the MongoDB database with the 10 local spiritual videos.
- **Frontend Refinement (`namandarshan-main`)**:
  - **Dynamic URL Resolution**: Integrated `getApiUrl` utility into `ShortsViewer` and `ShortCard` to handle local vs. Cloudinary URLs seamlessly.
  - **Interactive Shorts Feed**: 
    - Replaced the full-screen scroller in the "Shorts" tab with a **Responsive 3-Column Grid** for better web-proportionality.
    - Upgraded `ShortCard` with **Hover-to-Play** video previews and a silent audio policy.
    - Implemented a **Fisher-Yates Random Shuffle** for the "All" tab mixed feed to ensure dynamic content discovery.
  - **Proportion Fixes**: Constrained video card dimensions (`max-height: 600px`) to ensure premium aesthetics on large desktop monitors.
- **Side-by-Side UI Upgrade**:
  - Implemented a wide-format `ShortCard` inspired by Instagram's desktop view for the mixed feed.
  - Added a dual-column layout with fixed-height container (`600px`) for a standardized scroll experience.
  - Integrated dummy comments and action bars to simulate a full social experience.
- **Dual-Mode### [2026-04-28] - Immersive Shorts & Social Refinements

#### Added
- **Immersive Shorts Viewer**: A full-screen, backdrop-blurred modal experience for sacred video content.
  - **Auto-Play & Auto-Scroll**: Seamless transition between videos upon completion or manual scroll.
  - **Interactive Overlay**: Real-time Likes, Comments, and Sharing directly within the immersive view.
- **Organic Engagement Model**: Removed random like generation in favor of a purely community-driven +1 increment system persisted in MongoDB.
- **Universal Sharing**: Integrated the Web Share API with a clipboard fallback across all post types for seamless cross-platform sharing.

#### Refined
- **Double-Tap Interaction**: Restricted the pop-out viewer trigger to a double-tap/click on the video area, preventing accidental transitions.
- **Contextual Playback**: Single-tap on video cards now toggles play/pause locally on the Devotee Wall.
- **State Synchronization**: Implemented local state tracking for likes and comments to ensure immediate UI feedback.
- **Enhanced Privacy**: Restricted pop-out triggers to the video area only, isolating them from interaction buttons.
scriptions for a cleaner, visual-first gallery.
- **Documentation**: Updated `DEVELOPMENT_LOG.md` and `CHANGE_LOG.md` to track all final interaction and UI milestones.
