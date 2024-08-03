import Resume from "../assets/images/resume.pdf";
import Jay from "../assets/images/john.jpg";
const Home = () => {
  return (
    <div id="home">
      <div className="homeLink">
        <div className="HomeLink">
          <a href="tel:+2349027901278" target="_blank">
            +2349027901278
          </a>
          <a href="mailto:ebuakikenwa0902@gmail.com" target="_blank">
          ebuakikenwa0902@gmail.com
          </a>
        </div>
        <div>
          <button className="oran">EN</button>
          <button>FN</button>
        </div>
      </div>
      <div className="home">
        <div className="homeFirst">
          <div>
            <h2>Hello, My name is</h2>
            <h1>Ikenwa John Ebuka</h1>
            <div className="roll">
              <h3>Mobile Developer</h3>
              <h3>Electronic Engineer </h3>
              <h3>Technical writer</h3>
            </div>
            <p>
              I develop, test and deploy Native and Hybrid Mobile Application software.
            </p>
            <a href={Resume} download className="download-button">
              Download Resume
            </a>
          </div>
        </div>
        <div className="homeSecond">
          <div className="img">
            <img src={Jay} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
