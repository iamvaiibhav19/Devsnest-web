const AddItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

const checkItem = () => {
  return {
    type: "CHECK_BOX",
    // payload: id_item,
  };
};
const editItem = (item) => {
  return {
    type: "EDIT_ITEM",
    payload: item,
  };
};
export { AddItem, deleteItem, checkItem, editItem };
