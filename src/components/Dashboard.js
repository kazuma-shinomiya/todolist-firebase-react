import { signInWithGoogle } from "../service/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import * as Api from "../service/api";
import TodoList from "./TodoList";

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch();
  }, [currentUser])

  const fetch = async() => {
    if (currentUser) {
      const data = await Api.initGet(currentUser.uid);
      await setTodos(data);
    }
  }

  const formRender = () => {
    let dom;
    if (currentUser) {
      dom = <form>
        <input placeholder="ToDoName" value={inputName} onChange={handleChange}/>
        <button type="button" onClick={() => post()}>追加</button>
      </form>
    } else {
      dom = <button onClick={signInWithGoogle}>ログイン</button>
    }
    
    return dom;
  }

  const handleChange = (event) => {
    setInputName(event.currentTarget.value);
  }

  const post = async() => {
    await Api.addTodo(inputName, currentUser.uid);
    await setInputName("");
    fetch();
  }

  return (
    <div>
      ダッシュボード
      {formRender()}
      <TodoList todos={todos} />
    </div>
  )
}
export default Dashboard;