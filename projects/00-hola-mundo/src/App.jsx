import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import { useState } from "react";
export function App() {
  const users = [

    { name: "Jaume Alcántara", 
      username: "jaumealcantara", 
      isFollowing: true },

    { name: "InfoCodEs", 
      username: "InfoCodES_",
      isFollowing: false },

    { name: "Dios", 
      username: "dios",
      isFollowing: false },
     
  ];
  const [name, setName] = useState("Jaume Alcántara");
  console.log("render witrh name", name);
  return (
    <section className="App">
      {users.map(({ name, username, isFollowing }) => {
        
        return (
          <TwitterFollowCard
            key={username}
            name={name}
            username={username}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      } )}
    </section>
  );
}
