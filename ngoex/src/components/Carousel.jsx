import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Make sure Bootstrap JS is included


const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel" // Ensures auto-sliding
    >
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h5 className="card-title">Los Angeles</h5>
              <p className="card-text">
              (940) 458-485412563 
               Mallard Rd
               Sanger, Los Angeles(CA), 76266.
              </p>
              <a href="#" className="btn btn-primary">
                Los Angeles Center
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Chicago</h5>
              <p className="card-text">
              (913) 543-6073
               739 Linda Ln
               Bonner Springs, Chicago(CO), 66012
              </p>
              <a href="#" className="btn btn-primary">
                Chicago Center
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="New York">New York</h5>
              <p className="card-text"> (317) 861-99043754 
                S Redbird Trl
                New Palestine, New York(NY), 46163 </p>
              <a href="#" className="btn btn-primary">
                N.Y. Center
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Left and right controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
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
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
