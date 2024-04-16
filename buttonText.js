// Get all the buttons
const buttons = document.querySelectorAll('.button-insta, .button-art, .button-mail, .button-link');

// Get the contact text container
const contactTextContainer = document.getElementById('contact-text-container');

// Function to update contact text based on button hover
function updateContactText(text) {
  contactTextContainer.querySelector('p1').textContent = text;
}

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('mouseover', function() {
    let buttonText;
    switch (this.className) {
      case 'button-insta':
        buttonText = 'Instagram_';
        break;
      case 'button-art':
        buttonText = 'ArtStation_';
        break;
      case 'button-mail':
        buttonText = 'email_';
        break;
      case 'button-link':
        buttonText = 'LinkedIn_';
        break;
      default:
        buttonText = '_';
    }
    updateContactText(buttonText);
  });

  button.addEventListener('mouseout', function() {
    updateContactText('_'); // Reset text to default
  });
});
