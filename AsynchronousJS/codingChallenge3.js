// Coding Challenge #3

// PART 1

// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)

// 2. Compare the two versions, think about the big differences, and see which one
// you like more

// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab

// PART 2

// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'

// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')

// 3. Check out the 'imgs' array in the console! Is it like you expected?

// 4. Use a promise combinator function to actually get the images from the array

// 5. Add the 'parallel' class to all the images (it has some CSS styles)

// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img
// 3.jpg']. To test, turn off the 'loadNPause' function

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('The image is not found!'));
    });
  });
}

async function loadNPause() {
  try {
    const image = await createImage('img/img-1.jpg');
    console.log('Image 1 is loaded');
    await wait(2);
    image.style.display = 'none';

    const image2 = await createImage('img/img-2.jpg');
    console.log('Image 2 is loaded');
    await wait(2);
    image2.style.display = 'none';

    const image3 = await createImage('img/img-3.jpg');
    console.log('Image 3 is loaded');
    await wait(2);
    image3.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
}

// loadNPause();

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgEl = await Promise.all(imgs);
    imgEl.forEach(el => el.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
