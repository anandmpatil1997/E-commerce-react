const { Link } = require("react-router-dom");

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <h1 className="mt-5">About Us</h1>
            <p className="lead mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quaerat soluta! Aperiam, dignissimos incidunt eius
              sint vel repellendus perspiciatis in obcaecati veritatis odit!
              Pariatur reiciendis deleniti temporibus ullam sit voluptatum
              consectetur maiores voluptate sapiente dolor laborum dolorum,
              fugiat vitae ducimus aspernatur eveniet ea sint, quidem iure
              impedit dolores obcaecati? Voluptate atque tenetur est! Doloribus
              consectetur nisi blanditiis earum corporis consequuntur?
            </p>
            <Link to="/contact" className="btn btn-outline-primary mt-5">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png"
              height="450px"
              width="550px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
