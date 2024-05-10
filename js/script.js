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

// to handle the Load More functionality
let currentIndex = 0;
const cardsToShow = 3;
// let totalCards = 8;

function showMoreCards() {
  const cards = document.querySelectorAll('.comment-card');

  const nextIndex = Math.min(cards.length, currentIndex + cardsToShow);

  for (let i = currentIndex; i < nextIndex; i++) {
    cards[i].style.display = 'flex';
  }

  currentIndex = nextIndex;

  if (currentIndex >= cards.length) {
    document.getElementById('loadMoreBtn').disabled = true;
  }
}

document.querySelectorAll('.comment-card').forEach(card => {
  card.style.display = 'none';
});

showMoreCards();

document.getElementById('loadMoreBtn').addEventListener('click', showMoreCards);

// Function to search through the hospitals based on a query
function searchHospitals() {
  const searchInput = document.querySelector('.hospital-search-input');
  const query = searchInput.value.toLowerCase();
  // Have to add logic to search through hospitals
}

// Function to search through the comments based on selected criteria
function searchComments() {
  const searchInput = document.querySelector('.comment-search-input');
  const searchBy = document.querySelector('.search-by-select').value;
  const query = searchInput.value.toLowerCase();
  const comments = document.querySelectorAll('.comment-card');

  comments.forEach(comment => {
    let textToSearch = '';
    switch (searchBy) {
      case 'Name':
        textToSearch = comment.querySelector('h4').innerText;
        break;
      case 'Review':
        textToSearch = comment.querySelector('.comment-content p').innerText;
        break;
      default:
        textToSearch = comment.querySelector('.comment-content').innerText;
    }
    comment.style.display = textToSearch.toLowerCase().includes(query) ? '' : 'none';
  });
}

// Function to sort comments
function sortComments() {
  const sortBy = document.querySelector('.sort-by-select').value;
  const commentsContainer = document.querySelector('.comments-grid');
  const comments = Array.from(document.querySelectorAll('.comment-card'));

  comments.sort((a, b) => {
    switch (sortBy) {
      case 'Latest':
        // return new Date(b.querySelector('.comment-date').innerText) - new Date(a.querySelector('.comment-date').innerText);
        return new Date(b.querySelector('.comment-date').textContent) - new Date(a.querySelector('.comment-date').textContent);
      case 'Name':
        return a.querySelector('h4').innerText.localeCompare(b.querySelector('h4').innerText);
      case 'Rating':
        return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
      default:
        return 0;
    }
  });

  // Clear the container and append the sorted comments
  commentsContainer.innerHTML = '';
  comments.forEach(comment => commentsContainer.appendChild(comment));
}

// Event listeners for search inputs and select dropdowns
document.querySelector('.hospital-search-input').addEventListener('input', searchHospitals);
document.querySelector('.comment-search-input').addEventListener('input', searchComments);
document.querySelector('.search-by-select').addEventListener('change', searchComments);
document.querySelector('.sort-by-select').addEventListener('change', sortComments);


