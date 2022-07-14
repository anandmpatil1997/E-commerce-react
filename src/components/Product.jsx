import Skeleton from "react-loading-skeleton";

const { useState, useEffect } = require("react");
const { useParams, Link } = require("react-router-dom");

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setproduct(await response.json());

      setloading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={350} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} />
        </div>
      </>
    );
  };
  const Showproduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating{product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <Link to="/"> </Link>
          <Link to="/">
            <button className="btn btn-dark pl-1 ms-2 px-3">Go To Home</button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <Showproduct />}
        </div>
      </div>
    </>
  );
};
export default Product;
