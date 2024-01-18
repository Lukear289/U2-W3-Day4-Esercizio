const myurl = 'https://api.pexels.com/v1/search?query=airplane';
fetch(url, {
  headers: {
    Authorization: 'w3GmDaT50qzXO1bmwzsgHyRuuvYUgJbvT7WHNr71dElumXtSTlXvyC5z',
  },
}).then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Errore nella chiamata');
  }
});
const buttonLoadPrimary = document.getElementById('LoadPrimo');
const buttonLoadSecondary = document.getElementById('LoadSecondo');
