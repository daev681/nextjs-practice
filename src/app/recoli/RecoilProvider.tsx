// src/components/RecoilProvider.tsx
"use client"; // 클라이언트 컴포넌트

import { RecoilRoot } from "recoil";

export default function RecoilProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
