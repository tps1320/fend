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

function isValidText(text) {
    const pattern = /^[A-Za-z]+$/; // just accepts alphabets
    return pattern.test(text);
}

export{ isValidUrl }
export{ isValidText }