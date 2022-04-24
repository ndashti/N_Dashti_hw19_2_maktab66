import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { ListItemSecondaryAction, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function Categories({
  title,
  items,
  onItemSelect,
  deleteHandler,
  setSelectedItem,
  onEdit
}) {


  return (
    <>
      <Typography
        variant="h5"
        color="secondary"
        style={{ fontFamily: "impact" }}
      >
        {title}
      </Typography>
      <List component="ul">
        {items.map((item) => {
          return (
            <ListItem button key={item.id} onClick={() => onItemSelect(item)}>
              <ListItemText primary={item.title} />
              <ListItemSecondaryAction>
                <IconButton color="primary" onClick={() => { onEdit(true); onItemSelect(item);}}>
                  <Edit />
                </IconButton>
                <IconButton color="warning" onClick={() => deleteHandler(item.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
