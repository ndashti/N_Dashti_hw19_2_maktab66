import React from "react";
import Categories from "./Categories";

export default function LeftSide({
  items,
  onEdit,
  deleteHandler,
  setSelectedItem,
  currentCategory,
}) {
  const handleOnItemSelected = (i) => {
    setSelectedItem(i);
  };

  return (
    <>
      {(currentCategory === "all" || currentCategory === "web design") && (
        <Categories
          title="Web Design"
          items={items.filter((i) => i.category === "Web Design")}
          onItemSelect={handleOnItemSelected}
          deleteHandler={deleteHandler}
          onEdit={onEdit}
        />
      )}
      {(currentCategory === "all" || currentCategory === "front-end") && (
        <Categories
          title="Front-End"
          items={items.filter((i) => i.category === "Front-End")}
          onItemSelect={handleOnItemSelected}
          deleteHandler={deleteHandler}
          onEdit={onEdit}
        />
      )}
      {(currentCategory === "all" || currentCategory === "back-end") && (
        <Categories
          title="Back-End"
          items={items.filter((i) => i.category === "Back-End")}
          onItemSelect={handleOnItemSelected}
          deleteHandler={deleteHandler}
          onEdit={onEdit}
        />
      )}
    </>
  );
}
