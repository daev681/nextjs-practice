import ReduxProvider from "./redux/ReduxProvider";
import RecoilProvider from "./recoli/RecoilProvider"; // ✅ 추가
import HybridTodo from "./Home/HybridTodo";
import Redux_A from "./Home/redux-test/A";
import Redux_B from "./Home/redux-test/B";
import Redux_C from "./Home/redux-test/C";
import Recoli_A from "./Home/recoli-test/A";

export default function Home() {
  return (
    <RecoilProvider>  {/* ✅ Recoil을 최상단으로 감싸기 */}
    <ReduxProvider>
      <HybridTodo />
      <Redux_A />
      <Redux_B />
      <Redux_C />

    </ReduxProvider>
  </RecoilProvider>
  );
}
