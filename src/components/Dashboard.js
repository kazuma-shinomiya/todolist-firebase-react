import { signInWithGoogle } from "../service/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import * as Api from "../service/api";
import TodoList from "./TodoList";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';


const CenterComponent = styled('div')({
  textAlign: 'center',
  marginTop: 40,
});

const CustomForm = styled('form')({
  width: '100%',
  maxWidth: 360,
  margin: 'auto',
  marginBottom: 40,
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
});

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
      dom = <CustomForm>
        <TextField sx={{ mr: 2}} variant="standard" placeholder="ToDoName" value={inputName} onChange={handleChange}/>
        <Button variant="contained" size="small" 
          disabled={inputName.length > 0 ? false : true}
          type="button" onClick={() => post()}>追加
        </Button>
      </CustomForm>
    } else {
      dom = <Button onClick={signInWithGoogle}>ログイン</Button>
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
    <CenterComponent>
      {formRender()}
      <TodoList todos={todos} fetch={fetch}/>
    </CenterComponent>
  )
}
export default Dashboard;