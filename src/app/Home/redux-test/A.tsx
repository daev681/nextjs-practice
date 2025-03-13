"use client";
import { useDispatch } from "react-redux";
import { increment } from '../../redux/counterSlice'

const A = () => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>A 컴포넌트</h2>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default A;