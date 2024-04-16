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

function openSidebar() {
    document.getElementById("mySidebar").style.width = "100px";
    document.querySelector('.img--menu').style.right = "100px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector('.img--menu').style.right = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const sidebar = document.getElementById('mySidebar');
    const lavande = document.querySelector('.img--menu');

    body.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const bodyWidth = body.offsetWidth;
        const lavandeRight = lavande.getBoundingClientRect().right;
        const lavandeTop = lavande.getBoundingClientRect().top;
        const lavandeHeight = lavande.offsetHeight;
        const lavandeWidth = lavande.offsetWidth;
        const mouseOverThreshold = 70; // Threshold for mouseover zone

        // Calculate threshold only when mouse is within the lavande element
        if (mouseX >= lavandeRight && mouseY <= lavandeTop + lavandeHeight) {
            if (bodyWidth - mouseX <= mouseOverThreshold) {
                openSidebar();
            } else {
                closeSidebar();
            }
        }
    });

    sidebar.addEventListener('mouseenter', function(event) {
        openSidebar();
    });

    sidebar.addEventListener('mouseleave', function(event) {
        closeSidebar();
    });
});
