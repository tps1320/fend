function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('user-input').value;
    if(Client.isValidUrl(userInput)) {
        fetch('http://localhost:8080/analyze-url',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({userInput: userInput}),
        }).then(res => res.json()).then(function(results) {
          document.getElementById('polarity').innerHTML = `<span class='format-results'>Polarity: </span>${results.polarity}`;
          document.getElementById('subjectivity').innerHTML = `<span class='format-results'>Subjectivity: </span>${results.subjectivity}`;
          document.getElementById('polarity_confidence').innerHTML = `<span class='format-results'>Polarity Confidence: </span>${results.polarity_confidence}`;
          document.getElementById('subjectivity_confidence').innerHTML = `<span class='format-results'>Subjectivity Confidence: </span>${results.subjectivity_confidence}`;
          document.getElementById('text').innerHTML = `<span class='format-results'>Text: </span>${results.text}`;
      }).catch(err => console.log(err));
    } else if (Client.isValidText(userInput)){
      fetch('http://localhost:8080/analyze-text',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userInput: userInput}),
      }).then(res => res.json()).then(function(results) {
        document.getElementById('polarity').innerHTML = `<span class='format-results'>Polarity: </span>${results.polarity}`;
        document.getElementById('subjectivity').innerHTML = `<span class='format-results'>Subjectivity: </span>${results.subjectivity}`;
        document.getElementById('polarity_confidence').innerHTML = `<span class='format-results'>Polarity Confidence: </span>${results.polarity_confidence}`;
        document.getElementById('subjectivity_confidence').innerHTML = `<span class='format-results'>Subjectivity Confidence: </span>${results.subjectivity_confidence}`;
        document.getElementById('text').innerHTML = `<span class='format-results'>Text: </span>${results.text}`;
    }).catch(err => console.log(err));
    } else {
        alert("Please use valid url or valid text (only alphabets allowed are allowed in the text).")
    }
}

export { handleSubmit }