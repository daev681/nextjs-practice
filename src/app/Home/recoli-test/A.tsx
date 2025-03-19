"use client";
import { useRecoilState } from "recoil";
import { counterState } from "../../recoli/counterAtom";
import { useEffect } from "react";

const A = () => {
  const [count, setCount] = useRecoilState(counterState);

  useEffect(() => {
    console.log("A 컴포넌트가 마운트됨!");

    return () => {
      console.log("A 컴포넌트가 언마운트됨!");
    };
  }, []); // 빈 배열을 넣으면 마운트 & 언마운트 시 실행됨

  useEffect(() => {
    console.log(`🔄 A 컴포넌트 리렌더링됨! (Counter: ${count})`);
  });

  return (
    <div>
      <h2>A 컴포넌트</h2>
      <p>Counter 값: {count}</p> {/* 상태값 표시 */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default A;
