

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
    
  })

}
