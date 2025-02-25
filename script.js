// Function to handle the flow-away effect of ASCII Art
const asciiContainer = document.getElementById('asciiContainer');
const asciiArt = document.getElementById('asciiArt');

// Variables to store positions of ASCII Art
let originalX = 0;
let originalY = 0;

asciiContainer.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Calculate the new position and scale of the ASCII art based on cursor position
    asciiArt.style.transform = `translate(${x * 60}px, ${y * 60}px) scale(1.5)`;
});

// Reset the position when the cursor leaves the ASCII art
asciiContainer.addEventListener('mouseleave', () => {
    asciiArt.style.transform = 'translate(0, 0) scale(1)';
});

// Admin panel toggle
function toggleAdminPanel() {
    const adminTab = document.getElementById('adminTab');
    adminTab.style.display = adminTab.style.display === 'none' ? 'block' : 'none';
}

// Function to save the uploaded files (Placeholder)
function saveFiles() {
    const backgroundUpload = document.getElementById('backgroundUpload');
    const musicUpload = document.getElementById('musicUpload');

    // For now, just log the uploaded files
    console.log('Background File:', backgroundUpload.files[0]);
    console.log('Music File:', musicUpload.files[0]);

    // Add logic here to process the uploaded files (this requires backend support)
    alert('Files uploaded successfully!');
}

// Simulate Admin Login (For testing purposes only)
document.addEventListener('keydown', (event) => {
    if (event.key === 'A') { // Press 'A' to toggle admin panel
        toggleAdminPanel();
    }
});
