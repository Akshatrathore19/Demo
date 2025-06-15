// Function to handle the car model selection
document.getElementById('car-model').addEventListener('change', function() {
    const carModel = this.value;
    const carPhotos = document.querySelectorAll('.car-image');

    // Hide all images first
    carPhotos.forEach(photo => photo.style.display = 'none');

    // Show the selected car image
    if (carModel) {
        document.getElementById(carModel.toLowerCase() + '-photo').style.display = 'block';
    }

    updateOrderSummary(); // Update the order summary whenever car model is selected
});

// Function to update order details when services are selected
document.querySelectorAll('#car-wash, #car-repair').forEach(selectElement => {
    selectElement.addEventListener('change', updateOrderSummary);
});

// Function to update order summary and dynamic pricing
function updateOrderSummary() {
    const carWash = document.getElementById('car-wash').value;
    const carRepair = document.getElementById('car-repair').value;
    const carModel = document.getElementById('car-model').value;

    let orderSummary = 'Order Summary:\n';

    // Dynamic pricing calculation
    let totalPrice = 0;

    // Set prices for car wash services
    if (carWash) {
        orderSummary += `Car Wash: ${carWash}\n`;
        switch (carWash) {
            case 'Basic Wash':
                totalPrice += 150;
                break;
            case 'Premium Wash':
                totalPrice += 300;
                break;
            case 'Ultimate Wash':
                totalPrice += 500;
                break;
        }
    }

    // Set prices for car repair services
    if (carRepair) {
        orderSummary += `Car Repair: ${carRepair}\n`;
        switch (carRepair) {
            case 'Engine Repair':
                totalPrice += 2000;
                break;
            case 'Brake Repair':
                totalPrice += 1200;
                break;
            case 'AC Repair':
                totalPrice += 1500;
                break;
            case 'Transmission Repair':
                totalPrice += 1800;
                break;
        }
    }

    // Add car model to the summary
    if (carModel) {
        orderSummary += `Car Model: ${carModel}\n`;
    }

    // Display the calculated total price
    orderSummary += `Total Price: Rs ${totalPrice}\n`;

    // Update the order summary modal or alert
    document.getElementById('order-summary-modal').style.display = 'block';  // Show the modal
    document.getElementById('order-summary-content').innerText = orderSummary;  // Display the order summary in the modal
    document.getElementById('total-price').innerText = `Total Price: Rs ${totalPrice}`;  // Update total price
    updateServiceTime();  // Update estimated service time based on selected services
}

// Function to update the estimated service time
function updateServiceTime() {
    const carWash = document.getElementById('car-wash').value;
    const carRepair = document.getElementById('car-repair').value;

    let estimatedTime = 1; // Default time is 1 hour

    if (carWash && carRepair) {
        estimatedTime += 2; // Additional time for car repair
    } else if (carWash || carRepair) {
        estimatedTime += 1; // Add 1 hour for either car wash or repair
    }

    // Update the service time select dropdown
    document.getElementById('service-time').value = `${estimatedTime} hour${estimatedTime > 1 ? 's' : ''}`;
}

// Function to reset the form and selections
document.getElementById('reset-form').addEventListener('click', function() {
    document.getElementById('car-wash').value = '';
    document.getElementById('car-repair').value = '';
    document.getElementById('car-model').value = '';
    document.getElementById('service-time').value = '1 hour';

    // Hide all car images
    document.querySelectorAll('.car-image').forEach(photo => photo.style.display = 'none');

    // Close the order summary modal
    document.getElementById('order-summary-modal').style.display = 'none';
});

// Function to confirm the order
document.querySelector('.checkout-options button').addEventListener('click', function() {
    const carWash = document.getElementById('car-wash').value;
    const carRepair = document.getElementById('car-repair').value;
    const carModel = document.getElementById('car-model').value;

    if (!carWash || !carRepair || !carModel) {
        alert('Please complete the form before proceeding!');
    } else {
        alert('Thank you for your order! We will process your request soon.');
    }
});

// Close the order summary modal when clicking outside or on the close button
document.getElementById('order-summary-close').addEventListener('click', function() {
    document.getElementById('order-summary-modal').style.display = 'none';
});

document.getElementById('order-summary-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('order-summary-modal').style.display = 'none';
    }
});
// Function to handle the car model selection
document.getElementById('car-model').addEventListener('change', function() {
    const carModel = this.value;
    const carPhotos = document.querySelectorAll('.car-image');

    // Hide all images first
    carPhotos.forEach(photo => photo.style.display = 'none');

    // Show the selected car image
    if (carModel) {
        document.getElementById(carModel.toLowerCase() + '-photo').style.display = 'block';
    }

    updateOrderSummary(); // Update the order summary whenever car model is selected
});

// Function to update order details when services are selected
document.querySelectorAll('#car-wash, #car-repair').forEach(selectElement => {
    selectElement.addEventListener('change', updateOrderSummary);
});

// Function to update order summary and dynamic pricing
function updateOrderSummary() {
    const carWash = document.getElementById('car-wash').value;
    const carRepair = document.getElementById('car-repair').value;
    const carModel = document.getElementById('car-model').value;

    let orderSummary = 'Order Summary:\n';

    // Dynamic pricing calculation
    let totalPrice = 0;

    // Set prices for car wash services
    if (carWash) {
        orderSummary += `Car Wash: ${carWash}\n`;
        switch (carWash) {
            case 'Basic Wash':
                totalPrice += 150;
                break;
            case 'Premium Wash':
                totalPrice += 300;
                break;
            case 'Ultimate Wash':
                totalPrice += 500;
                break;
        }
    }

    // Set prices for car repair services
    if (carRepair) {
        orderSummary += `Car Repair: ${carRepair}\n`;
        switch (carRepair) {
            case 'Engine Repair':
                totalPrice += 2000;
                break;
            case 'Brake Repair':
                totalPrice += 1200;
                break;
            case 'AC Repair':
                totalPrice += 1500;
                break;
            case 'Transmission Repair':
                totalPrice += 1800;
                break;
        }
    }

    // Add car model to the summary
    if (carModel) {
        orderSummary += `Car Model: ${carModel}\n`;
    }

    // Display the calculated total price
    orderSummary += `Total Price: Rs ${totalPrice}\n`;

    // Update the order summary modal or alert
    document.getElementById('order-summary-modal').style.display = 'block';  // Show the modal
    document.getElementById('order-summary-content').innerText = orderSummary;  // Display the order summary in the modal
    document.getElementById('total-price').innerText = `Total Price: Rs ${totalPrice}`;  // Update total price
    updateServiceTime();  // Update estimated service time based on selected services
}

// Function to update the estimated service time
function updateServiceTime() {
    const carWash = document.getElementById('car-wash').value;
    const carRepair = document.getElementById('car-repair').value;

    let estimatedTime = 1; // Default time is 1 hour

    if (carWash && carRepair) {
        estimatedTime += 2; // Additional time for car repair
    } else if (carWash || carRepair) {
        estimatedTime += 1; // Add 1 hour for either car wash or repair
    }

    // Update the service time select dropdown
    document.getElementById('service-time').value = `${estimatedTime} hour${estimatedTime > 1 ? 's' : ''}`;
}

// Function to reset the form and selections
document.getElementById('reset-form').addEventListener('click', function() {
    document.getElementById('car-wash').value = '';
    document.getElementById('car-repair').value = '';
    document.getElementById('car-model').value = '';
    document.getElementById('service-time').value = '1 hour';

    // Hide all car images
    document.querySelectorAll('.car-image').forEach(photo => photo.style.display = 'none');

    // Close the order summary modal
    document.getElementById('order-summary-modal').style.display = 'none';
});

// Function to confirm the order
document.querySelector('.checkout-options button').addEventListener('click', function() {
    const carWash = document.getElementById('car-wash').value;
    const carRepair = document.getElementById('car-repair').value;
    const carModel = document.getElementById('car-model').value;

    if (!carWash || !carRepair || !carModel) {
        alert('Please complete the form before proceeding!');
    } else {
        alert('Thank you for your order! We will process your request soon.');
    }
});

// Close the order summary modal when clicking outside or on the close button
document.getElementById('order-summary-close').addEventListener('click', function() {
    document.getElementById('order-summary-modal').style.display = 'none';
});

document.getElementById('order-summary-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('order-summary-modal').style.display = 'none';
    }
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactMessage = document.getElementById('contact-message').value;

    // Simple validation for the contact form
    if (!contactName || !contactEmail || !contactMessage) {
        alert('Please fill out all the fields before submitting.');
        return;
    }

    // Simulate form submission (you can replace this with real submission logic)
    alert(`Thank you, ${contactName}! We have received your message: "${contactMessage}"`);

    // Clear the form after submission
    document.getElementById('contact-form').reset();
});

