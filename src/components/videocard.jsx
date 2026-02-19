import React from 'react';


function VideoCard({ video }) {
    if (!video) return <div>Loading...</div>;

    return (
        <div className="w-80 m-2 cursor-pointer group">
            <div className="w-full relative overflow-hidden rounded-xl">
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {formatDuration(video.contentDetails?.duration)}
                </div>
            </div>

            <div className="flex mt-3">
                <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mr-3 flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">
                        {video.snippet.channelTitle.charAt(0).toUpperCase()}
                    </span>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2 text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors duration-200">
                        {video.snippet.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1 hover:text-gray-900 transition-colors duration-200">
                        {video.snippet.channelTitle}
                    </p>
                    <div className="flex text-gray-500 text-xs items-center">
                        <span>{video.statistics ? formatViewCount(video.statistics.viewCount) : "N/A"} views</span>
                        <span className="mx-1">•</span>
                        <span>{timeAgo(video.snippet.publishedAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper functions for formatting
const formatViewCount = (count) => {
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count;
};

const formatDuration = (duration) => {
    if (!duration) return "N/A";
    
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "N/A";
    
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return "just now";
};

export default VideoCard;