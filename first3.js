// search filter

const searchFun = () => {
    let filter = document.getElementById('myinput').value.toUpperCase(); // Get the input value and convert to uppercase
    let items = document.getElementsByClassName('item'); // Get all grid items
    
    for (let i = 0; i < items.length; i++) { 
        let p = items[i].getElementsByTagName('p')[0]; // Get the location (the second <p> tag)
        if (p) {
            let textValue = p.textContent || p.innerText; // Get the text content of the location
            if (textValue.toUpperCase().indexOf(filter) > -1) { // If the input matches any part of the location
                items[i].style.display = ""; // Show the grid item
            } else {
                items[i].style.display = "none"; // Hide the grid item
            }
        }       
    }
};

// Rating System

const starRatingContainers = document.querySelectorAll('.star-rating-container');

starRatingContainers.forEach(container => {
  const stars = container.querySelectorAll('.star');
  const ratingValue = container.querySelector('p');
  let currentRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      currentRating = star.getAttribute('data-rating');
      updateStars(stars, currentRating);
      ratingValue.textContent = `Rating: ${currentRating}`;
    });

    star.addEventListener('mouseover', () => {
      updateStars(stars, star.getAttribute('data-rating'));
    });

    star.addEventListener('mouseout', () => {
      updateStars(stars, currentRating);
    });
  });
});

function updateStars(stars, rating) {
  stars.forEach(star => {
    star.classList.toggle('selected', star.getAttribute('data-rating') <= rating);
  });
}
