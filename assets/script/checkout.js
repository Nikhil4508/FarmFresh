document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    var formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value
    };

    // Here you would typically send formData to your backend server for processing
    // For this demonstration, let's just log the form data
    console.log('Form data:', formData);

    // Display a confirmation message to the user
    alert('Thank you for your order!\n\nYour order has been placed successfully.');

    // Redirect the user to a thank you page
    window.location.href = 'index.html';
     // Clear the cart data (assuming cart is managed on client-side)
     clearCart();
});
function clearCart() {
    // Implement logic to clear the cart data
    // For example, if you're using localStorage to store cart data:
    localStorage.removeItem('cart');
}