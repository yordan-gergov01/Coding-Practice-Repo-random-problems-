// Coding Challenge #1

// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time

// Your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).

// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}. The AJAX call
// will be done to a URL. Use the fetch API and
// promises to get the data.

// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”

// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console

// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message

// Test data:
// - Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// - Coordinates 2: 19.037, 72.873
// - Coordinates 3: -33.933, 18.474

function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);

      return response.json();
    })
    .then(data => {
      if (!data.city || !data.countryName) {
        throw new Error('No location data available for these coordinates.');
      } else {
        console.log(`You are in ${data.city}, ${data.countryName}`);
      }
    })
    .catch(err => console.log(err.message));
}
whereAmI(45.642, 23.45);
