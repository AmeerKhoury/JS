function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const success = true;
      if (success) {
        resolve({ message: 'Data fetched successfully!' });
      } else {
        reject('Error fetching data.');
      }
    }, 2000);
  });
}

fetchData()
  .then(function (data) {
    console.log('Promise result:', data);
  })
  .catch(function (error) {
    console.error('Promise error:', error);
  });

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log('Async/Await result:', data);
  } catch (error) {
    console.error('Async/Await error:', error);
  }
}
fetchDataAsync();
