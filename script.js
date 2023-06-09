const bandNames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Led Zeppelin', 'Nirvana', 'The Who'];

function removeArticles(name) {
  const articles = ['the', 'a', 'an'];
  const words = name.split(' ');
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

const sortedBandNames = bandNames.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

const bandList = document.querySelector('#band');
sortedBandNames.forEach(bandName => {
  const listItem = document.createElement('li');
  listItem.textContent = bandName;
  bandList.appendChild(listItem);
});