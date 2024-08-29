// Get a reference to the image element with the id 'dog-img'
const img = document.getElementById('dog-img');

// Define an asynchronous function named getDog to fetch a random dog image
const getDog = async () => {
    // Fetch a random dog image from the Dog CEO API
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    // Extract JSON data from the response
    const data = await request.json();
    // Set the 'src' attribute of the image element to the URL of the fetched dog image
    img.src = data.message;
};

// Get a reference to the button element with the id 'btn-dog'
let btnDog = document.getElementById('btn-dog');

// Add an event listener to the button to trigger the getDog function when clicked
btnDog.addEventListener('click', () => getDog());

