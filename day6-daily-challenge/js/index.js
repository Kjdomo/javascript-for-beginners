// ========================= EXAMPLE 1 =========================

function job1() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise1 = job1();

promise1

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});

/*
 * Results of First Exampled (Should be logged in console): 
 * Error 1
 * Success 4
 */


 // ========================= EXAMPLE 2 =========================
function job2(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise2 = job2(true);

promise2

.then(function(data) {
    console.log(data);

    return job2(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job2(true);
})

.catch(function(error) {
    console.log(error);
});


/*
 * Results of First Exampled (Should be logged in console): 
 * success
 * error
 * Error caught
 */


 /*
  * Note: You may want to comment out and run Example1 and Example2 alone, since the results 
  * consoled from the two examples may be interweaved. 
  * Resources:
  *  1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  *  2. https://stackoverflow.com/questions/42013104/placement-of-catch-before-and-after-then
  */ 