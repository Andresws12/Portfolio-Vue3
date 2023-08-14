export const BASE_URL = import.meta.env.VITE_API_URL ?? '';

/**
 * This function takes a string and returns a concatenated string with a base URL.
 * @param {string} url - The `url` parameter is a string representing the endpoint or path of an API.
 * It is used as a parameter for the `apiPrefix` function to concatenate it with the `BASE_URL`
 * constant and return the complete URL for making API requests.
 */
export const apiPrefix = (url: string): string => BASE_URL + url;

/* `export const jsonHeaders` is a constant variable that contains an object with headers for making
HTTP requests with JSON data. The `Content-Type` header specifies that the data being sent is in
JSON format, and the `Accept` header specifies that the client expects to receive JSON data in
response. This is useful for making API requests that require JSON data to be sent and received. */
export const jsonHeaders = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
/* `export const htmlHeaders` is a constant variable that contains an object with headers for making
HTTP requests that expect to receive HTML data in response. The `Accept` header specifies that the
client expects to receive HTML data in response. This is useful for making API requests that require
HTML data to be received. */
export const htmlHeaders = {
  headers: {
    Accept: 'text/html',
  },
};
