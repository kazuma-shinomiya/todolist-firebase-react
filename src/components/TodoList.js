import * as Api from "../service/api";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = (props) => {
  const handleDelete = async(id) => {
    Api.deleteTodo(id);
    props.fetch();
  }

  const handleCheck = async(id) => {
    await Api.toggleComplete(id);
    props.fetch();
  }
  const makeList = props.todos.map((todo) => {
    return (
      <ListItem key={todo.id}
        secondaryAction={
          <IconButton edge="end" onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.isComplete}
              onChange={() => handleCheck(todo.id)}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={todo.content} />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <List sx={{ m: 'auto', width: '100%', maxWidth: 360, bgcolor: 'Background.paper'}}>{makeList}</List>
  )
}
export default TodoList;