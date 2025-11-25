# How to Add Your YouTube Videos

Your Claritone support videos from the playlist:
https://www.youtube.com/playlist?list=PLxXKOHgxGL6px4zjbaHlg6hBL9mpeTB9j

## Method 1: Get Video IDs from YouTube Playlist

1. **Open your playlist** in YouTube
2. **Click on each video** to view it
3. **Copy the video ID** from the URL. For example:
   - URL: `https://www.youtube.com/watch?v=ABC123xyz`
   - Video ID: `ABC123xyz` (the part after `v=`)

## Method 2: Quick Extract All Video IDs

1. Open your playlist: https://www.youtube.com/playlist?list=PLxXKOHgxGL6px4zjbaHlg6hBL9mpeTB9j
2. Right-click and select "View Page Source"
3. Search for `"videoId":` in the source code
4. Copy each video ID that appears

## Update the Website

Once you have your video IDs, update `/app/frontend/src/mockData.js`:

```javascript
export const supportVideos = [
  {
    id: 1,
    title: 'Your Actual Video Title',
    description: 'Your video description',
    videoId: 'YOUR_ACTUAL_VIDEO_ID', // Replace this
    thumbnail: 'https://img.youtube.com/vi/YOUR_ACTUAL_VIDEO_ID/mqdefault.jpg' // Replace this
  },
  // Add more videos...
];
```

## Example

If your video URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, update it like this:

```javascript
{
  id: 1,
  title: 'Getting Started with Claritone',
  description: 'Learn the basics of your new hearing aids',
  videoId: 'dQw4w9WgXcQ',
  thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg'
}
```

## Need Help?

If you want me to add the videos for you, just share:
1. The video titles from your playlist
2. The video URLs or IDs

I'll update the mockData.js file for you!
