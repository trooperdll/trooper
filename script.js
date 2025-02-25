// Custom Cursor Movement (Now Aligned Properly)
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Mobile Touch Support (For Mobile Users)
document.addEventListener("touchmove", (e) => {
    let touch = e.touches[0];
    cursor.style.left = `${touch.clientX}px`;
    cursor.style.top = `${touch.clientY}px`;
});
