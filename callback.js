const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: "The user has left",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "User is watching cat meme",
    });
  } else {
    callback("asdf");
  }
}

watchTutorialCallback(
  (message) => {
    console.log("Success " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

/* FUNCTION FROM ABOVE USING PROMISES INSTEAD 

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: "The user has left",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "User is watching cat meme",
      });
    } else {
      resolve("asdf");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
*/
