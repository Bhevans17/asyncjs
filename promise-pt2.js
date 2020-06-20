const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

// After all the above are finished .all() will run these in parallel
// We dont have to worry about waiting for one before starting the next
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

// Is just like Promise.all() EXCEPT it will return as soon as the first
// one is completed instead of waiting for everything and because of that
// it will only return a SINGLE output
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(message);
  }
);
