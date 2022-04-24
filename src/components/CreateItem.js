import AddIcon from '@mui/icons-material/Add';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";

export default function CreateItem({addHandler}) {
  const [open, setOpen] = useState(false);
  const submitHandler = (item) => {
    addHandler(item);
    setOpen(false);
  }
  return (
    <div>
      <Fab onClick={() => setOpen(!open)} aria-label="Add" color="secondary">
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle id="form-dialog-title">Create a New Skills</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <Form submitHandler={submitHandler}/>
        </DialogContent>
      </Dialog>
      <br />
    </div>
  );
}
