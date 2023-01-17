import Link from "next/link";

const WorldSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className={`wpo-world-area ${props.worldclass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 pb100">
            <div className="wpo-world-section">
              <h2>
                Join us and together we'll serve our commnuity with faith, hope
                and love
              </h2>
              <Link onClick={ClickHandler} href="/VolunteerPage">
                <a>
                  <img src="images/team/1.png" alt="" /> Become A Volunteer
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldSection;
