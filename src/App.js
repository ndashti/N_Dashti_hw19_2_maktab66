import { useState } from "react";
import { AppBar, Grid, Paper, Tab, Tabs } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/Header";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./page/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [itemArray, setItemArray] = useState([
    {
      id: 1,
      category: "Web Design",
      title: "HTML",
      des: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 2,
      category: "Web Design",
      title: "CSS",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 3,
      category: "Front-End",
      title: "JavaScript",
      des: "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
    },
    {
      id: 4,
      category: "Front-End",
      title: "ReactJS",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 5,
      category: "Back-End",
      title: "NodeJS",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 6,
      category: "Back-End",
      title: "C#",
      des: "Hypertext222 Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
  ]);

  const defaultValue = {
    id: 0,
    title: "Welcome!",
    des: "Please select an exercise from the list on the left side.",
  };

  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  const deleteHandler = (id) => {
    setItemArray([...itemArray.filter((item) => item.id !== id)]);
    setIsEditing(false);
    setSelectedItem(defaultValue);
  };

  const updateHandler = (editedItem) => {
    setItemArray([
      ...itemArray.filter((item) => item.id !== editedItem.id),
      editedItem,
    ]);
    setIsEditing(false);
    setSelectedItem(defaultValue);
  };

  const addHandler = (item) => {
    const newId =
      Math.max.apply(
        null,
        itemArray.map((item) => item.id)
      ) + 1;
    const newItem = { ...item, id: newId };
    setItemArray([...itemArray, newItem]);
  };

  return (
    <>
      <CssBaseline />
      <Header addHandler={addHandler} />

      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper
                    style={{
                      padding: "5px",
                      height: "100%",
                      margin: "10px 0px 5px 5px",
                    }}
                  >
                    <LeftSide
                      items={itemArray}
                      setSelectedItem={setSelectedItem}
                      onEdit={setIsEditing}
                      deleteHandler={deleteHandler}
                      currentCategory={currentCategory}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper
                    style={{
                      padding: "5px",
                      height: "100%",
                      margin: "10px 0px 5px 5px",
                    }}
                  >
                    <RightSide
                      selectedItem={selectedItem}
                      isEditing={isEditing}
                      updateHandler={updateHandler}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <AppBar
                color="transparent"
                position="static"
                style={{ marginTop: "30px" }}
              >
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  value={currentCategory}
                  onChange={(e) =>
                    setCurrentCategory(e.target.innerText.toLowerCase())
                  }
                >
                  <Tab label="All" value="all" />
                  <Tab label="Web Design" value="web design" />
                  <Tab label="Front-End" value="front-end" />
                  <Tab label="Back-End" value="back-end" />
                </Tabs>
              </AppBar>
            </>
          }
        />
      </Routes>

      <Outlet />
    </>
  );
}

export default App;
