// Simulate fetching data with setTimeout and Promise
function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const success = true; // change to false to simulate error
            if (success) {
                resolve({ message: "Data fetched successfully!" });
            } else {
                reject("Error fetching data.");
            }
        }, 2000); // simulate 2 seconds delay
    });
}

// Using the Promise
fetchData()
    .then(function(data) {
        console.log("Promise result:", data);
    })
    .catch(function(error) {
        console.error("Promise error:", error);
    });

    
// Async function using async/await
async function fetchDataAsync() {
    try {
        const data = await fetchData(); // wait for Promise to resolve
        console.log("Async/Await result:", data);
    } catch (error) {
        console.error("Async/Await error:", error);
    }
}

// Call the async function
fetchDataAsync();
