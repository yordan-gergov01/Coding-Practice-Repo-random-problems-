import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}

export async function getJSON(url) {
  try {
    const fetchPromise = fetch(url);
    const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (err) {
    throw err;
  }
}
