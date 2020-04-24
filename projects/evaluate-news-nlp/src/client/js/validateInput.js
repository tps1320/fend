// checks if user input is valid url
function isValidUrl(urlString) {
    //Referred https://stackoverflow.com/a/43467144
    let url = '';
    try {
        url = new URL(urlString); // https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
      } catch (error) {
        return false;
      }
      return url.protocol === "http:" || url.protocol === "https:";
}
// checks if user input has only alphabets and spaces
function isValidText(text) {
    const pattern = /^[A-Za-z ]+$/; // just accepts alphabets and spaces
    return pattern.test(text);
}

export { isValidUrl }
export { isValidText }