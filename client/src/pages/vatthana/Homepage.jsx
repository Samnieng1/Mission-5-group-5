import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [greetings, setGreetings] = useState("Hello World");

  useEffect(() => {
    axios.get("http://localhost:5000/greetings").then((res) => {
      console.log(res.data);
      setGreetings(res.data);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-40">
      <h1 className="text-5xl my-4 text-gray-700">Greetings from the Team :</h1>
      <h2 className="text-4xl text-gray-700">{greetings[0].message}</h2>
    </div>
  );
};

export default Homepage;
