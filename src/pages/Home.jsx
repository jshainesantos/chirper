import React from "react";
import Post from "../components/Post";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  const [userProfile, setUserProfile] = useState("");
  const [chirp, setChirp] = useState("");
  const [chirps, setChirps] = useState([]);


  useEffect(() => {
    // Authentication
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserProfile({
          email: user.email,
          name: user.displayName,
        });
      } else {
        navigate("/login");
      }
    });

    // Retrieve chirps
    onSnapshot(collection(db, "chirps"), (snapshot) => {
      setChirps(snapshot.docs.map((t) => t.data()));
    });
  }, []);

  const createChirp = () => {
    if (chirp !== "") {
      const chirpData = {
        body: chirp,
        user_email: userProfile.email,
        name: userProfile.name,
        date_posted: Timestamp.now(),
      };

      addDoc(collection(db, "chirps"), chirpData).then(() => {
        setChirp("");
      });
    } else {
      alert("Chirp cannot be empty!").then(() => {
      });
    }
  };

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-[60rem] px-5 space-y-5">
        {/* NEW POST */}
        <div className="card shadow-md mt-5">
          <div className="card-body">
            <p className="text-3xl font-bold">What's crackin'?</p>
            <button onClick={logout}>logout</button>
            <textarea
              placeholder="Write here..."
              className="textarea textarea-bordered textarea-lg w-full mt-4"
              onChange={(e) => {
                setChirp(e.target.value);
              }}
              value={chirp}
            ></textarea>

            <div className="flex justify-end mt-5 space-x-5">
              <button className="btn btn-secondary" onClick={createChirp}>
                POST
              </button>
            </div>
          </div>
        </div>

        {chirps.map((chirpRecord) => (
          <Post
            key={chirpRecord.id}
            body={chirpRecord.body}
            email={chirpRecord.user_email}
            name={chirpRecord.name}
            date_posted={
              chirpRecord.date_posted
                ? chirpRecord.date_posted.toDate().toString()
                : ""
            } 
          ></Post>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
