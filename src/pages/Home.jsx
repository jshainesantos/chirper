import React from "react";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-[60rem] px-5 space-y-5">
        <NewPost />
        <Post />
      </main>
      <Footer/>
    </>
  );
};

export default Home;
