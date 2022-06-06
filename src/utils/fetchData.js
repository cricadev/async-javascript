// get the function from xmlhttprequest package
import { XMLHttpRequest } from 'xmlhttprequest';

// make a function that fetch the data with xmlhttprequest it receives the url
const fetchData = (url) => new Promise((resolve, reject) => {
  // assing the function to a local variable
  const xhttp = new XMLHttpRequest();
  // use open method to get the data
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      xhttp.status === 200
        ? resolve(JSON.parse(xhttp.responseText))
        : reject(new Error('Error', url));
    }
  };

  // we send to the server
  xhttp.send();
});
export default fetchData;
