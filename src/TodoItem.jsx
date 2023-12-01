// Material UI
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function TodoItem({todo, removeTodo, toggleTodo}) {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
          secondaryAction={
            <IconButton onClick={removeTodo} edge="end" aria-label="delete">
              <DeleteOutlinedIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={toggleTodo}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
          </ListItemButton>
        </ListItem>
    );
}

export default TodoItem;