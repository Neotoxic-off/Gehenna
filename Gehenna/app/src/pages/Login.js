import Button from "../components/Button";
import Field from "../components/Field";

import "../styles/grid.css"
import "../styles/pages/login.css"

function Login() {
  return (
    <>
      <div className="container">
        <div className="item">
          <div className="credentials">
            <Field type="text"/>
            <Field type="password"/>
          </div>
          <div className="item button-login">
            <Button text="Login" link="/"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
