// Select all comment cards
let commentCards = document.querySelectorAll('.comment-card');

// Add single and double click events to each comment card
commentCards.forEach((card) => {
    card.addEventListener('click', function() {
        alert('You clicked on a comment card!');
    });
    card.addEventListener('dblclick', function() {
        alert('You double-clicked on a comment card!');
    });
});

// Implement search functionality
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', function() {
    let filter = searchInput.value.toUpperCase();
    commentCards.forEach((card) => {
        let content = card.querySelector('.comment-content').textContent;
        if (content.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});

// Implement filter functionality
let filterSelect = document.querySelector('.filter-select');
filterSelect.addEventListener('change', function() {
    let filter = filterSelect.value;
    // Implement your filter logic here
});
