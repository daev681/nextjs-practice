import Image from "next/image";
import { Provider } from "react-redux";
import HybridTodo from "./Home/HybridTodo";
import store from "./redux/store";
import A from "./Home/redux-test/A";
import B from "./Home/redux-test/B";
import C from "./Home/redux-test/C";
export default function Home() {
  return (
      <Provider store={store}>
      <HybridTodo/>   
      <A />
      <B />
      <C /> 
      </Provider>
  );
}
