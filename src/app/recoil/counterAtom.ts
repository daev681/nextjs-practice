import { atom } from "recoil";

export const counterState = atom<number>({
  key: "counterState",  // 상태 식별 키 (유니크해야 함)
  default: 0,           // 초기 값
});
