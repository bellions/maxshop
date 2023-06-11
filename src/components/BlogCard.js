import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          className="img-fluid w-100"
          src="images/blog-1.jpg"
          alt="blog-card"
        />
      </div>
      <div className="blog-content">
        <p className="date">12 FEB, 2023</p>
        <h5 className="title">A beautiful sunday morning renaissance </h5>
        <p className="desc">
          You're only good as your last collection, which is an Enormous
          Pressure. I Think There is Something about...
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
