// src/app/ReduxProvider.tsx
"use client"; // 클라이언트 전용 설정
import { Provider } from "react-redux";
import store from "../redux/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <>
    <Provider store={store}>
        {children}
    </Provider>

  </>
    ;
}
