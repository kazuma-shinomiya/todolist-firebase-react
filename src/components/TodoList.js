const TodoList = (props) => {
  const makeList = props.todos.map((todo) => {
    return (
      <li key={todo.id}>{todo.content}</li>
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