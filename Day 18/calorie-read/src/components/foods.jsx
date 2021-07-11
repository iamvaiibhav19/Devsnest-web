const Food = ({ title, calories }) => {
  return (
    <div className="foods">
      <h2>{title}</h2>
      <h3>You have consumed {calories} calories today</h3>
    </div>
  );
};

export default Food;
