# Development Log - namandarshan-main (Recovery)

This document tracks all changes made to the project, including dependency installations and code modifications.

## [2026-04-29] - Shorts Reliability & Immersive Interaction

### [2026-04-29 11:30] - Mimetype Support & Z-Index Stability
- **Backend Fix**: Updated `fileFilter` in `posts.js` to support iPhone videos (`video/quicktime`) and legacy AVI formats (`video/x-msvideo`). Previously, these were blocked by a strict regex, causing "unable to upload" errors for many users.
- **UI Architecture (Z-Index Stability)**: 
  - Resolved a "glitching" issue using **Dynamic Z-Index**: The `ShortsViewer` drops to `z-40` during edits so the modal overlay (z-50) can cover it, while the modal content sits at `z-100`.
  - **Contextual UI**: Implemented `isEditing` state to automatically hide the viewer's `X` button and sidebar controls when a modal is active.
- **Upload Resilience**: Added a safety check in `UploadShortModal.tsx` to prevent closing the modal during active uploads, ensuring data integrity for large video files.
- **UX Refinement**: Swapped the `Film` icon for a standard `Edit3` pencil icon for the edit action to match user expectations.

### Status: COMPLETED (Reliability & Architecture)

## [2026-04-27] - Project Recovery & Dependency Installation

### Tasks Started:
1.  **Project Identification**: Restored work on `namandarshan-main` in its new location.
2.  **Dependency Audit**: Checking for missing dependencies in root and backend.
3.  **Tracking System**: Re-initializing this log.

### [2026-04-27 12:49] - Initial Setup
- Initialized dependency audit for frontend and backend.
- Started installation of core dependencies in the root directory.
- Identified missing dependencies in the backend `package.json`.

### [2026-04-27 12:50] - Task Completion
- **Frontend Dependencies**: Successfully installed via `npm install` in the root directory.
- **Backend Dependencies**:
    - Updated `backend/package.json` with essential MERN stack dependencies.
    - Successfully installed via `npm install` in the `backend` directory.
- **Documentation**: All changes and observations recorded in `DEVELOPMENT_LOG.md`.

### Status: COMPLETED

---

## [2026-04-28] - Navigation Enhancement

### [2026-04-28 11:08] - Internal Referral Link Integration
- **Header Modification**: Changed "Spread Sanatan Dharma" button in `src/components/layout/Header.tsx`.
- **Logic**: Swapped external WhatsApp URL for internal route `/referral`.
- **Navigation**: Implemented `Link` from `react-router-dom` to ensure smooth client-side transitions.
- **Cleanup**: Removed an accidental direct import of the `Referral` component in the header file.

### Status: UPDATED

---

## [2026-04-28] - Shorts Feature: Frontend Infrastructure

### [2026-04-28 12:29] - Shorts Upload Infrastructure & Validation
- **Upload Component**: Created `UploadShortModal.tsx` featuring:
  - Drag-and-drop file interface restricted to video formats.
  - **Pre-upload Validation**: Implemented client-side metadata checking to enforce a 20-second maximum duration.
  - **Size Constraints**: Enforced a 25MB file size limit to optimize backend storage.
- **UI Integration**: 
  - Added a `Film` icon to the `PostCreationBox` as a dedicated entry point for Shorts.
  - Implemented conditional rendering for the modal based on `isUserAuthenticated`.
- **UX Polish**: Added loading states and spiritual success toasts for a premium feel.

### Status: COMPLETED (Frontend Feature Set)

## [2026-04-28 13:06] - Hybrid Storage Fix: Local Video Playback
- **Static Route Optimization**: 
  - Simplified the backend static route in `server/index.js` to serve videos directly from `/videos/`.
  - This avoids double-prefixing issues (`/public/public/videos`) and ensures cleaner URL matching.
- **Seeding Logic Update**:
  - Updated `seed-shorts.js` to use direct filenames without double-encoding, resolving "404 Not Found" errors in the browser.
  - Implemented automatic deletion of old "short" entries before seeding to prevent feed clutter.
- **ShortCard Upgrade**:
  - Converted the static image preview into a dynamic `<video>` element.
  - Added "Hover-to-Play" logic for a premium, interactive user experience.
  - **Proportion Fix**: Implemented `max-height: 600px` and `max-width: 340px` to maintain a perfect 9:16 aspect ratio on desktop screens.
- **Responsive Grid Layout**:
  - Implemented a dynamic grid (`grid-cols-1` to `grid-cols-3`) for the dedicated Shorts tab.
  - Added `justify-items-center` to ensure a balanced, professional gallery view on large monitors.
- **Instagram-Style "All" Feed Layout**:
  - Redesigned the `ShortCard` for the mixed "All" tab to use a **Side-by-Side split pane** (Desktop).
  - Left Side: Video Player (60% width) with object-contain to preserve spiritual visuals.
  - Right Side: Interaction Hub (40% width) featuring user branding, follow actions, scrollable description, and integrated social buttons.
  - Ensured mobile responsiveness with automatic vertical stacking.
- **Click-to-Play Interaction**:
  - Implemented `handleClick` logic to allow manual video toggling on all devices.
  - Synchronized "Play" button overlays to hide/show based on active playback state.
- **Dual-Mode Gallery**:
  - Configured the dedicated "Shorts" tab to show a **Grid Gallery** without descriptions for high-speed browsing.
  ### Status: COMPLETED (Hybrid Storage & Interactive Cards)

## [2026-04-28 18:30] - Manual Engagement & Content Management
- **Engagement Strategy Pivot**:
  - Shifted from simulated engagement to a **strict +1 organic like system**.
  - Updated `seed-shorts.js` to ensure all system-generated posts start with balanced, non-randomized engagement.
  - Disabled `sacredCron.js` (Sacred Heartbeat) to prevent automated engagement inflation.
- **Content Security & Permissions**:
  - Implemented **Secure Ownership Verification** in the backend (`DELETE` and `PATCH` routes).
  - Users are now strictly restricted to editing/deleting only their own uploaded shorts and posts.
  - Verification is handled via the `x-user-id` header matched against the `userId` in MongoDB.
- **Management UI**:
  - Integrated `DropdownMenu` (Edit/Delete) into `ShortCard.tsx`.
  - Added an "Edit Description" modal with spiritual aesthetics.
  - Implemented **Optimistic UI Deletion** for instant user feedback.
- **Database Seeding**:
  - Successfully executed `node server/seed-shorts.js`.
  - Populated the database with 9 curated sacred shorts.
  - Verified path resolution for local assets served via `/videos/`.

### Status: UPDATED (Secure Management System)
