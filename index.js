// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function GET_DATA(param1) {
  try {
    parseInt(param1);
    appDiv.appendChild(param1);
    return {
      data: param1,
      result: 'pass',
    };
  } catch (err) {
    console.warn(err.message);
    return {
      data: param1,
      result: 'failure',
    };
  }
}

console.log(GET_DATA('dddd'));
