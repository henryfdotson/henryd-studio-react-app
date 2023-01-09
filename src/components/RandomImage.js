function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

function RandomImage() {

  let randomItem = images[Math.floor(Math.random()*images.length)];

  return (
    <div>
    <img src={randomItem} alt={randomItem} height="500px" />
    </div>
  );
}

export default RandomImage;