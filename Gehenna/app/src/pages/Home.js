import Button from "../components/Button";
import Header from "../components/Header";

import "../styles/grid.css"

// import { ReactComponent as Github } from "../assets/icons/svg/github.svg";

function Home() {
  return (
    <>
      {/* <Header profile="https://avatars.githubusercontent.com/u/44700383?v=4"/> */}
      <div className="container">
        <div className="item">
          <Button
            text="Login"
            link="https://github.com/Neotoxic-off"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
