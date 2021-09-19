/*const IncCounter = (num: number) => {
  return {
    type: "INC_COUNTER",
    payload: num,
  };
};

const DecCounter = (num: number) => {
  return {
    type: "DEC_COUNTER",
    payload: num,
  };
};

export { IncCounter, DecCounter };*/

const addNote = (note: string) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

const deleteNote = (id: number) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};

export { addNote, deleteNote };
