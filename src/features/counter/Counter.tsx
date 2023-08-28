import { Button } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { decrease, increase } from "./counter.slice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.counter)

  const dispatch = useAppDispatch()
  const handleClickAdd = () => dispatch(increase())
  const handleClickMinus = () => dispatch(decrease())

  return (
    <div>
      <Button variant="contained" onClick={handleClickAdd}>Add</Button>
      <Button variant="contained" onClick={handleClickMinus}>Minus</Button>
      <br/>
      <span>{count}</span>
    </div>
  )
}

export default Counter
