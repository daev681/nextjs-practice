"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment } from '../../redux/counterSlice'
import { useEffect } from "react";
import { RootState } from "../../redux/store"; // RootState import
const B = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value); // counter 값 가져오기

  
  useEffect(() => {
      console.log("B 컴포넌트가 마운트됨!");
  
      return () => {
        console.log("B 컴포넌트가 언마운트됨!");
      };
    }, []); // 빈 배열을 넣으면 마운트 & 언마운트 시 실행됨
  
    useEffect(() => {
      console.log(`🔄 B 컴포넌트 리렌더링됨! (Counter: ${count})`);
    });
  return (
    <div>
      <h2>B 컴포넌트</h2>
      <p>Counter 값: {count}</p> {/* 상태값 표시 */}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default B;