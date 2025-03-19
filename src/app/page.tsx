

import ReduxProvider from "./redux/ReduxProvider";
import HybridTodo from "./Home/HybridTodo";
import A from "./Home/redux-test/A";
import B from "./Home/redux-test/B";
import C from "./Home/redux-test/C";

export default function Home() {
  return (
    <ReduxProvider>
      <HybridTodo />
      <A />
      <B />
      <C />
    </ReduxProvider>
  );
}