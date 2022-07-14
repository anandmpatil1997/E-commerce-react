import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState([]);
  const [loading, setloading] = useState([]);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterproduct = (cat) => {
    const updatedlist = data.filter((x) => x.category === cat);
    setfilter(updatedlist);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons mb-5">
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setfilter(data)}
          >
            ALL
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => filterproduct("men's clothing")}
          >
            Men's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => filterproduct("women's clothing")}
          >
            Women's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => filterproduct("jewelery")}
          >
            Jewelery{" "}
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => filterproduct("electronics")}
          >
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt="..."
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <Link to={`/products/${product.id}`}>
                      {" "}
                      <a class="btn btn-primary">Show Details</a>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
