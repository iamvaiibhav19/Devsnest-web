import "../calorieTracker.css";

const Card = ({ title, calories, uniqueID, pop }) => {
  const handleDelete = (event) => {
    pop(uniqueID);
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      {calories !== null && (
        <h3>You have consumed {calories} calories today</h3>
      )}
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      <button className="edit">Edit</button>
    </div>
  );
};

export default Card;
