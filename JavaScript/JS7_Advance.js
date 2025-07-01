//Asyncronous JavaScript

console.log('Start');
console.log('Middle');

setTimeout(() => {
    console.log('This is an asynchronous message after 2 seconds');
}, 2000); // Simulating an asynchronous operation

console.log('End');


// 1. Callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log('Data fetched with callback:', data);
});

//Callbacks can lead to "callback hell" if not managed properly, making code harder to read and maintain.
// Example of callback hell
function fetchDataWithCallbackHell() {
    fetchData((data1) => {
        console.log('First data with callback hell:', data1);
        fetchData((data2) => {
            console.log('Second data with callback hell:', data2);
            fetchData((data3) => {
                console.log('Third data with callback hell:', data3);
            });
        });
    });
}

fetchDataWithCallbackHell();
// The above code demonstrates how callbacks can lead to nested structures, making it difficult to follow the flow of execution.


// 2. Promises
function fetchDataPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!data) {
                reject('No data provided');
                return;
            }
            resolve(data);
        }, 8000);
    });
}

fetchDataPromise({ id: 2, name: 'Karan' })
.then((data) => {
    console.log('Data fetched with promise:', data);
})
.catch((error) => {
    console.error('Error fetching data with promise:', error);
});


// 3. Chaining Promises
function fetchDataChained(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!data) {
                resolve('No data provided');
                return;
            }
            resolve(data);
        }, 2000);
    });
}

fetchDataPromise(1).then((data) => {
    console.log('First data with promise:', data);
    return fetchDataChained(2);
})
.then((data) => {
    console.log('Chained data:', data);
})
.catch((error) => {
    console.error('Error in promise chain:', error);
});



// 4. Async/Await
function fetchDataWithAsyncAwait(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched:', data);
            resolve(data);
        }, 2000);
    });
}

async function fetchDataAsync() {
    console.log('Fetching data 5...');
    await fetchDataWithAsyncAwait(5);
    console.log('Fetching data 6...');
    await fetchDataWithAsyncAwait(6);
    console.log('Fetching data 7...');
    await fetchDataWithAsyncAwait(7);
}

fetchDataAsync();


// 5. Error Handling with Async/Await
async function fetchDataWithErrorHandling() {
    try {
        const data = await fetchDataWithAsyncAwait(10);
        console.log('Data fetched with error handling:', data);
    } catch (error) {
        console.error('Error fetching data with error handling:', error);
    }
}

fetchDataWithErrorHandling();
