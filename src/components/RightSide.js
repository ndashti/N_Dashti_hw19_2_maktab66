import { Typography } from "@mui/material";
import React from "react";
import Form from "./Form";

export default function RightSide({ selectedItem, isEditing, updateHandler }) {
  return (
    <>
      {isEditing ? (
        <Form
          selectedItem={selectedItem}
          isEditing={isEditing}
          submitHandler={updateHandler}
        />
      ) : (
        <>
          <Typography variant="h4" color="secondary" gutterBottom>
            {selectedItem.title}
          </Typography>
          <Typography>{selectedItem.des}</Typography>
        </>
      )}
    </>
  );
}
