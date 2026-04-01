// Placeholder script for the Hello World App
// Asset version: a1b2c3

document.addEventListener('DOMContentLoaded', () => {
    console.log('App loaded! v=a1b2c3');
    const img = document.querySelector('img');
    if (img) {
        img.addEventListener('load', () => {
            console.log('Image loaded successfully');
        });
        img.addEventListener('error', () => {
            console.error('Failed to load image');
        });
    }
});
