import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card  text-white">
        <img
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="card-img"
          alt="..."
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-coloumn justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS{" "}
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
