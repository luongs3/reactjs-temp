import React, { useState } from "react";
import { Button } from "@mui/material";

const HomePage :React.FC<{}> = () => {
  const [count, updateCount] = useState(0)

  const handleClickAdd = () => {
    updateCount(count+1)
  }

  const handleClickMinus = () => {
    updateCount(count-1)
  }

  return (
    <div id="homepage">
      <h1>Home Page</h1>
      <Button variant="contained" onClick={handleClickAdd}>Add</Button>
      <Button variant="contained" onClick={handleClickMinus}>Minus</Button>
      <br/>
      <span>{count}</span>
    </div>
  )
}

export default HomePage
