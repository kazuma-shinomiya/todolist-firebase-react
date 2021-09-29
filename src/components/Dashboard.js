import { signInWithGoogle } from "../service/firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import * as Api from "../service/api";

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");

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

  const post = () => {
    Api.addTodo(inputName, currentUser.uid);
    setInputName("");
  }

  return (
    <div>
      ダッシュボード
      {formRender()}
    </div>
  )
}
export default Dashboard;