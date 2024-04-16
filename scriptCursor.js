document.addEventListener("DOMContentLoaded", function() {
  const cursor = document.getElementById('custom-cursor');

  document.addEventListener('mousemove', function(e) {
    // Update the position of the custom cursor to match the mouse position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Show the custom cursor when navigating inside the window
  document.body.addEventListener('mouseenter', function() {
    cursor.style.display = 'block';
  });

  // Hide the custom cursor when leaving the window
  document.body.addEventListener('mouseleave', function() {
    cursor.style.display = 'none';
  });
});
