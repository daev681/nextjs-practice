import ReduxProvider from "./redux/ReduxProvider";
import RecoilProvider from "./recoil/RecoilProvider"; // ✅ Recoil Provider
import HybridTodo from "./Home/HybridTodo";
import Redux_A from "./Home/redux-test/A";
import Redux_B from "./Home/redux-test/B";
import Redux_C from "./Home/redux-test/C";
import Recoil_A from "./Home/recoil-test/A";

export default function Home() {
  return (
      <RecoilProvider>
        <ReduxProvider>
          <HybridTodo />
          <Redux_A />
          <Redux_B />
          <Redux_C />
          <Recoil_A />
        </ReduxProvider>
      </RecoilProvider>
  );
}
