document.addEventListener("DOMContentLoaded", function() {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const imageInput = document.getElementById('product-image');
    const imagePreview = document.getElementById('image-preview');

    // Function to preview the selected image
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result; // Set the preview image source
                imagePreview.style.display = 'block';  // Show the preview image
            };
            reader.readAsDataURL(file); // Read the image as a data URL
        }
    });

    // Handle form submission
    productForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Get form input values
        const productName = document.getElementById('product-name').value;
        const productDescription = document.getElementById('product-description').value;
        const productPrice = document.getElementById('product-price').value;
        const personName = document.getElementById('person-name').value;
        const personNumber = document.getElementById('person-number').value;

        // Get the image preview source
        const imageSrc = imagePreview.src;

        // Create new list item
        const li = document.createElement('li');

        // Add product details to the list item, including the image
        li.innerHTML = `
            <img src="${imageSrc}" alt="Product Image">
            <span>${productName}</span>
            <div class="description">${productDescription}</div>
            <div class="price">Price: $${productPrice}</div>
            <div class="contact">Contact: ${personName}, ${personNumber}</div>
        `;

        // Append the new product to the product list
        productList.appendChild(li);

        // Clear the form and hide the image preview
        productForm.reset();
        imagePreview.style.display = 'none';
    });
});
