function changeBackgroundColor() {
    // Array of predefined colors
    const colors = ['#f4a261', '#2a9d8f', '#e76f51', '#264653', '#e9c46a', '#8ecae6', '#ffb703'];
    
    // Get a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply it to the body background
    document.body.style.backgroundColor = randomColor;
}
