import React from "react";
import Counter from "../counter/Counter";

const HomePage :React.FC<{}> = () => {
  return (
    <div id="homepage">
      <h1>Home Page</h1>
      <Counter />
    </div>
  )
}

export default HomePage
