const Food = ({ title, calories, deleteCalorie, uniqueId }) => {
  const clickHandle = () => {
    deleteCalorie(uniqueId);
  };
  return (
    <div className="foods">
      <h2>{title}</h2>
      <h3>You have consumed {calories} calories today</h3>
      <button className="deleteButton" onClick={clickHandle}>
        Delete
      </button>
    </div>
  );
};

export default Food;
