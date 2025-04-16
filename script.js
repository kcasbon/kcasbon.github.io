document.addEventListener('DOMContentLoaded', () => {
    // Get all the cards
    const cards = document.querySelectorAll('.card');
  
    // Add click event to each card
    cards.forEach(card => {
      const dropdown = card.querySelector('.card-dropdown');
  
      card.addEventListener('click', () => {
        // If dropdown is already open, close it. If closed, open it.
        dropdown.classList.toggle('open');
      });
    });
  });
  
  