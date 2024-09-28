document.addEventListener("DOMContentLoaded", function() {
    const shopForm = document.getElementById('shop-form');
    const shopList = document.getElementById('shop-list');
    const imageInput = document.getElementById('shop-image');
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
    shopForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Get form input values
        const shopName = document.getElementById('shop-name').value;
        const shopAddress = document.getElementById('shop-address').value;
        const shopNumber = document.getElementById('shop-number').value;

        // Get the image preview source
        const imageSrc = imagePreview.src;

        // Create new list item
        const li = document.createElement('li');

        // Add shop details to the list item, including the image
        li.innerHTML = `
            <img src="${imageSrc}" alt="Shop Image">
            <span>${shopName}</span>
            <div class="description">Address: ${shopAddress}</div>
            <div class="contact">Contact: ${shopNumber}</div>
        `;

        // Append the new shop to the shop list
        shopList.appendChild(li);

        // Clear the form and hide the image preview
        shopForm.reset();
        imagePreview.style.display = 'none';
    });
});
