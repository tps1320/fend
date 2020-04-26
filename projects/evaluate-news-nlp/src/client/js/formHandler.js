//on submit, makes post request to local server which then calls aylien api and returns the results.
//The results are then displayed in the view.
function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('user-input').value;
    analyzeSentiment(userInput);
}

function fetchAnalyzeUrl(userInput) {
  return fetch('http://localhost:8081/analyze-url',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({userInput: userInput}),
  });
}

function fetchAnalyzeText(userInput) {
  return fetch('http://localhost:8081/analyze-text',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({userInput: userInput}),
  });
}

function displayAnalyzeResults(results) {
  spinner.setAttribute('hidden', '');
  document.getElementById('polarity').innerHTML = `<span class='format-results'>Polarity: </span>${results.polarity}`;
  document.getElementById('subjectivity').innerHTML = `<span class='format-results'>Subjectivity: </span>${results.subjectivity}`;
  document.getElementById('polarity_confidence').innerHTML = `<span class='format-results'>Polarity Confidence: </span>${results.polarity_confidence}`;
  document.getElementById('subjectivity_confidence').innerHTML = `<span class='format-results'>Subjectivity Confidence: </span>${results.subjectivity_confidence}`;
  document.getElementById('text').innerHTML = `<span class='format-results'>Text: </span>${results.text}`;
}

function analyzeSentiment(userInput) {
  const spinner = document.getElementById("spinner");
  if(Client.isValidUrl(userInput)) {
    spinner.removeAttribute('hidden');
    fetchAnalyzeUrl(userInput).then(res => res.json())
      .then(displayAnalyzeResults)
      .catch(err => console.log(err));
  } else if (Client.isValidText(userInput)) {
    spinner.removeAttribute('hidden');
    fetchAnalyzeText(userInput).then(res => res.json())
      .then(displayAnalyzeResults)
      .catch(err => console.log(err));
  } else {
    alert("Please use valid url or valid text (only alphabets allowed are allowed in the text).")
  }
}
export { analyzeSentiment, displayAnalyzeResults, fetchAnalyzeUrl, fetchAnalyzeText, handleSubmit }