import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function Form({
  selectedItem,
  isEditing,
  submitHandler,
}) {
  const { id, category, title, des } = selectedItem ? selectedItem : {
      id: 0,
      category: 'Web Design',
      title: '',
      des: ''
  };
  const [state, setState] = useState({
    id,
    category,
    title,
    des,
  });
  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <form>
      <TextField
        label="Title"
        name="title"
        value={state.title}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select fullWidth  name="category" value={state.category}  onChange={handleChange}>
          <MenuItem value="Web Design">Web Design</MenuItem>
          <MenuItem value="Front-End">Front-End</MenuItem>
          <MenuItem value="Back-End">Back-End</MenuItem>
        </Select>
      </FormControl>
      <br />
      <TextField
        label="Description"
        multiline
        rows="4"
        value={state.des}
        name="des"
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <br />
      <Button
        color="primary"
        variant="contained"
        disabled={!state.title || !state.category || !state.des}
        onClick={() => submitHandler(state)}
      >
        {isEditing ? "Edit" : "Create"}
      </Button>
    </form>
  );
}
