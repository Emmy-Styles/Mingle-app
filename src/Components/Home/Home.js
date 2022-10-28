import React from "react";
import "./home.css";
import { BsEmojiSmile } from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa"

function Home() {
  return (
    <section className="container-h">
      <div className="content">
        <h3>Welcome to Phinder <div className="icon"><BsEmojiSmile /></div></h3>
        <p>where you connect with great<br/>
        people who are ready to make<br/>
        friends with you <FaRegHandshake />.
        </p>
        <a href="/Users"><button >Find Now</button></a>
      </div>
    </section>
  );
}

export default Home;
