function playVideo(videoId, title) {
    const player = document.getElementById('youtube-player');
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    
    document.getElementById('video-title').textContent = title;
    document.getElementById('video-description').textContent = `Now playing: ${title}`;
}

function toggleCategory(categoryId) {
    const list = document.getElementById(`${categoryId}-list`);
    const icon = document.getElementById(`${categoryId}-icon`);
    
    list.classList.toggle('collapsed');
    icon.classList.toggle('rotate-180');
}

// Initialize all categories as expanded
document.addEventListener('DOMContentLoaded', function() {
    // Add max-height to song lists for smooth transition
    document.querySelectorAll('.song-list').forEach(list => {
        list.style.maxHeight = list.scrollHeight + 'px';
    });
});
