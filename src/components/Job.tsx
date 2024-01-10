import { MdPhonelink, MdOutlineDesktopWindows } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const Job = () => {
  return (
    <div id="bio">
      <h1 className="title">What I do?</h1>
      <div className="title-cards">
        <div className="cardbio">
          <div className="rad">
            <MdPhonelink className="icon" />
          </div>
          <div className="biotext">
            <h3>Mobile Development</h3>
            <p>
              Build Native and Hybrid Mobile Applications from scratch. Making use of Architecture patterns 
              to enhance functionality, scalability and testability.
            </p>
          </div>
        </div>
        <div className="cardbio">
          <div className="rad">
            <MdOutlineDesktopWindows className="icon" />
          </div>
          <div className="biotext">
            <h3>Technical Writing</h3>
            <p>
              As a selftaught and skilled technical writer, I wield the power of words to
              distill complex concepts into clear, concise, and comprehensive
              documentation that enlightens and empowers users.
            </p>
          </div>
        </div>
        <div className="cardbio">
          <div className="rad">
            <GiTeacher className="icon" />
          </div>
          <div className="biotext">
            <h3>Tutoring</h3>
            <p>
              I guide aspiring mobile developers/programmers on their journey into coding and software development. 
              In my course coding for newbies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
