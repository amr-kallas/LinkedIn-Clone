import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { user } from "../redux/actions/Action";
import "./join.css";
const Join = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const [confirm, setConfirm] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const sendUser = () => {
    props.setUser({
      name: name,
      email: email,
      password: password,
    });
  };
  const confirmPassword = (e: any) => {
    setCurrPassword(e.target.value);
  };
  const navigate=useNavigate()
  useEffect(() => {
    if (currPassword == password) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [currPassword]);
  const handler = (e: any) => {
    e.preventDefault();
    if (password != currPassword) {
      setError(true);
    } else {
      setError(false);
      sendUser()
      navigate('/home')
    }
  };
  return (
    <div className="join">
      <form onSubmit={(e) => handler(e)}>
        <h2>Create Your Account</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          minLength={8}
        />
        <label htmlFor="password">Repeat Password</label>
        <input
          type="password"
          className="currentPassword"
          name="password"
          value={currPassword}
          required
          onChange={(e) => confirmPassword(e)}
          style={{
            boxShadow: confirm == false ? "0 0 4px red" : "0 0 4px green",
          }}
          minLength={8}
        />
        {error && (
          <p className="password">the password isn't correct, try again</p>
        )}
        <button>
          Create account
        </button>
        <p className="have-account">
          Already have an account? <Link to={"/sign"}>Sign in</Link>
        </p>
        <hr />
        <p className="terms">
          By creating an account, you agree to our <br />{" "}
          <Link to={"#"}> terms and conditions </Link>
        </p>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (payload: any) => dispatch(user(payload)),
  };
};
export default connect(null, mapDispatchToProps)(Join);
