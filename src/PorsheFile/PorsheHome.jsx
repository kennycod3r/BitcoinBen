const PorsheHome = () => {
  const car =
    "https://images.unsplash.com/photo-1694026015216-d474894705a2?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="porshe-wrapper flex">
          <div class="car-container">
            <img class="image" src={car} alt="Car" />
            <div class="text">Car</div>
          </div>

          <div className="div--two">
            <h1>porshe</h1>
          </div>
      </div>
    </>
  );
};

export default PorsheHome;
