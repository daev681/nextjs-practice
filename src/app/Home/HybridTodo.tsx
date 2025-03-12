// ✅ HybridTodo.tsx (서버 컴포넌트)
import ClientComponent from "./ClientComponent";
async function getTodos() {
    return [
      { id: 1, text: "✅ 서버에서 불러온 할 일 1" },
      { id: 2, text: "✅ 서버에서 불러온 할 일 2" },
    ];
  }
  
  export default async function HybridTodo() {
    const todos = await getTodos(); // 서버에서 데이터 가져오기 (SSR)
  
    return <ClientComponent initialTodos={todos} />; // 클라이언트 컴포넌트 불러오기
  }
  