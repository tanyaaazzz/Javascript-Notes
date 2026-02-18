const getData = new Promise((resolve, reject) => {
  let internet = true;

  setTimeout(() => {
    if (internet) {
      resolve("Data fetched successfully");
    } else {
      reject("Network error");
    }
  }, 2000);
});

// Consuming the Promise
getData
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
