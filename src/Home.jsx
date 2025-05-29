import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // IMPORTANT!

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home mpa</h1>
      <a href="/settings">Go to settings</a>

      <div className="border shadow p-5" style={{ position: "relative" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide border"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-indicators"
            style={{
              position: "absolute",
              bottom: -50,
              // top: 50,
            }}
          >
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                color: "red",
                backgroundColor: "red",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor: "yellow",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="
                className="d-block w-100 h-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/love-bear-dolls_1155-27.jpg?semt=ais_hybrid&w=740"
                className="d-block w-100 h-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg"
                className="d-block w-100 h-100"
                alt="Slide 3"
              />
            </div>
          </div>
          <div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              style={{
                position: "absolute",
                bottom: "-110%",
                left: "30%",
                color: "red",
                backgroundColor: "red",
                // height: "40px",
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              style={{
                position: "absolute",
                bottom: "-110%",
                right: "30%",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {/* Custom Red Arrow */}
              <span
                aria-hidden="true"
                style={{
                  fontSize: "2rem",
                  color: "red",
                }}
              >
                ➡️
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
