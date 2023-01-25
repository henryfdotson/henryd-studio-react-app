import Clock from "./Clock";
import RandomImage from "./RandomImage";

function Home(){
  return(
    <div>
      <h1 className="homeTitle">HENRYD.STUDIO</h1>
      <RandomImage />
      <Clock />
    </div>
  )
};

export default Home;