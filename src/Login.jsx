import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import "./Login.css";
import { useDispatch } from "react-redux";
import { userLogin } from "./redux/login/userActions";
import { unstable_createMuiStrictModeTheme } from "@mui/material";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(
          userLogin({
            email: user.user.email,
            uid: user.user.uid,
            displayName: user.user.displayName,
            photoURL: user.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please Enter Full Name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            userLogin({
              email: auth.currentUser.email,
              uid: auth.currentUser.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <img src="../images/linkedinLoginLogo.png" alt="" />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Fullname"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Picture URL"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign-in
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
