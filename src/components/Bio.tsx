import Jane from "../assets/images/john.jpg";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
const Bio = () => {
  return (
    <div id="bio">
      <div className="bio">
        <div>
          <div>
            <div className="bioImg">
              <img src={Jane} alt="" />
              <div className="one">
                <a
                  href="https://web.facebook.com/profile.php?id=100070181230867"
                  target="_blank"
                >
                  <ImFacebook className="icon" />
                </a>
              </div>
              <div className="two">
                <a
                  href="https://twitter.com/IkenwaJ"
                  target="_blank"
                >
                  <BsTwitter className="icon" />
                </a>
              </div>
              <div className="three">
                <a href="https://www.instagram.com/j_maricool/" target="_blank">
                  <AiOutlineInstagram className="icon" />
                </a>
              </div>
              <div className="four">
                <a
                  href="https://www.linkedin.com/in/maricool/"
                  target="_blank"
                >
                  <ImLinkedin2 className="icon" />
                </a>
              </div>
              <div className="five">
                <a href="https://github.com/John-Maricool" target="_blank">
                  <BsGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="bioHead">
              <h2>Mobile Developer</h2>
              <h2>Ikenwa John</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title">Biography</h1>
          <div className="bioPara">
            <p>
            I am Ikenwa John Ebuka, a dedicated Mobile Developer with 4 years of experience specializing in Flutter and Android native development. With a solid foundation in electronic engineering, I've honed my skills through freelancing, internships, and full-time positions. My proficiency in Dart, Java, and Kotlin has enabled me to deliver scalable and innovative mobile applications. I am committed to continuous learning and eager to bring my expertise to impactful mobile projects.
            </p>
            
          </div>
          <div className="bioInfo">
            <ul>
              <div>
                <h5>NickName:</h5> <p>Maricool</p>
              </div>
              <div>
                <h5>Location:</h5> <p>Lagos</p>
              </div>
            </ul>
            <ul>
              <div>
                <h5>Phone:</h5> <p>+2349027901278</p>
              </div>
              <div>
                <h5>Email:</h5>
                <p>ebukaikenwa0902@gmail.com</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
