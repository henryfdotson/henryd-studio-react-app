function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

function RandomImage() {

  let randomItem = images[Math.floor(Math.random()*images.length)];
  let randomItemTitle = randomItem.match(/media\/(.*?)\./)[1];

  return (
    <div className="randomImage">
      <img src={randomItem} alt={randomItem} />
      <p className="randomItemTitle">{randomItemTitle}</p>
    </div>
  );
}

export default RandomImage;