import * as Api from "../service/api";

const TodoList = (props) => {
  const handleDelete = (id) => {
    Api.deleteTodo(id);
    props.fetch();
  }

  const makeList = props.todos.map((todo) => {
    return (
      <li key={todo.id}>{todo.content}<button type="button" onClick={() => handleDelete(todo.id)}>削除</button></li>
    );
  });

  return (
    <div>
      <h2>Your ToDo</h2>
      <ul>{makeList}</ul>
    </div>
  )
}
export default TodoList;