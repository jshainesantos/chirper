import React from "react";
import firebaseApp from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let nav = useNavigate();

  const auth = getAuth(firebaseApp);

  useEffect(()=> {
    onAuthStateChanged(auth, (user)=>{
      if(user) {
        navigate("/");
      }
    });

  }, [])

  const handleRegistration = () =>{

    if(
      name !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword
    ){
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential)=>{
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name
          });
          
          navigate("/");

      });
    } else {
      // If any of the conditions fail, display an error message
      alert("ERROR");
    }
  };

  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <div className="card shadow w-full max-w-96">
          <div className="card-body">
            <p className="text-3xl font-bold">Welcome to Chirper!</p>
            <p className="text-lg">Create an account here.</p>
            <div className="container max-w-xs flex flex-col">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </label>

              <div className="bottom space-y-4 mt-4">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    className="grow"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    value={confirmPassword}
                  />
                </label>
              </div>
              <button
                className="btn btn-secondary mt-4"
                onClick={handleRegistration}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
