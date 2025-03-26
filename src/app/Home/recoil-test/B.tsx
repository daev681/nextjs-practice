"use client";
import { useRecoilState } from "recoil";
import { counterState } from "../../recoil/counterAtom";
import { counterJotai } from '../../recoil/counterJotai';

import { useAtom } from 'jotai';
import { useEffect } from "react";

const B = () => {
  const [count, setCount] = useAtom(counterJotai); // 상태 읽기 및 수정

  useEffect(() => {
    console.log("B 컴포넌트가 마운트됨!");

    return () => {
      console.log("B 컴포넌트가 언마운트됨!");
    };
  }, []); // 빈 배열을 넣으면 마운트 & 언마운트 시 실행됨

  useEffect(() => {
    console.log(`🔄 B 컴포넌트 리렌더링됨! (Counter: ${count})`);
  }, [count]); // count 상태가 변경될 때만 실행됨

  return (
    <div>
      <h2>저스탠드 - B 컴포넌트</h2>
      <p>Counter 값: {count}</p> {/* 상태값 표시 */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default B;
