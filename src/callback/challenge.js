// get the function from xmlhttprequest package
import { XMLHttpRequest } from 'xmlhttprequest';

const API = 'https://rickandmortyapi.com/api/character/';

// make a function that fetch the data with xmlhttprequest it receives the url
function fetchData(url, callback) {
  // assing the function to a local variable
  const xhttp = new XMLHttpRequest();
  // use open method to get the data
  xhttp.open('GET', url, true);
  // if a state change then execure a function
  xhttp.onreadystatechange = function () {
    // here will check if the readystate is 4 that means is complete and it got
    // a response and that its status is 200
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      // if this is true then we execute the function we passed in, and there we put two arguments
      // first is null and second is the response
      callback(null, JSON.parse(xhttp.responseText));
    } else { // else we create an error log and we return the function with error and null
      const error = new Error(`Error${url}`);
      return callback(error, null);
    }
  };
  // we send to the server
  xhttp.send();
}

fetchData(API, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
