import "./Home.scss";
import me from "../../assets/memoji-waving.png";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__inner-container">
        <h1>
          Hello there!
        </h1>
        <img src={me} className="home__image" />
        <p>
          My name is Victor Hugo Batistela, and this is my portfolio! I was born
          in São Paulo, Brazil, and moved to the United States in 2017. I
          currently study Computer Science at the Georgia Institute of
          Technology and am looking for opportunities in the Software Engineering
          world. I am passionate about traveling, experiencing new adventures,
          and I am always down to play some Volleyball!
        </p>
      </div>
    </div>
  );
}

export default Home;