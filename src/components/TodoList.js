import React, { useContext } from "react";
import Store from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
import s from "./Punkt.module.css";

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Typography
} from "@material-ui/core";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  let count = state.todos.length;
  let comment;
  if (count === 0) {
    comment = "So when you are free, start another work to get tired!";
  } else {
    comment = "";
  }

  let count_complete = state.complete.length;

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Todo List ({count})</Typography>
          <Typography>{comment}</Typography>
          <br />
          <div>
            <List>
              {state.todos.map(t => (
                <ListItem divider key={t}>
                  <ListItemText primary={t} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch({ type: "COMPLETE", payload: t })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <div className={state.myTheme === 'light' ? s.complete : `${s.complete} ${s.dark}`}>
                <Typography variant="h6">Complete list ({count_complete})</Typography>
                <ul>
                  {state.complete.map(t => <li key={t} onClick={() => dispatch({ type: "ADD_FROM_COMPLETE", payload: t })}>{t}</li>)}
                </ul>
            </div>
            
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default TodoList;
