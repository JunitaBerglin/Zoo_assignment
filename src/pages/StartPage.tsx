import { Navbar } from "../components/Navbar/Navbar";

import { Link } from "react-router-dom";
import "./StartPage.scss";

export const StartPage = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="welcomeWrapper">
        <div className="welcomeWrapper__welcomeBox">
          <h1 className="welcomeWrapper__welcomeBox--title">
            The Zoo
          </h1>
          <h2 className="welcomeWrapper__welcomeBox--welcome">
            Hey you!
          </h2>
          <span className="welcomeWrapper__welcomeBox--desc">
            Here you will find some hungry animals that would love to
            be fed. Click the button below to see which animals there
            is!
          </span>

          <div className="welcomeWrapper__welcomeBox--link">
            <Link
              to="/animals"
              style={{ textDecoration: "none", color: "white" }}>
              Say hello to the animals!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
