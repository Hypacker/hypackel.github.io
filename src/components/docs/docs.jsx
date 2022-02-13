import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

function Abouter() {
  return (
    <>
    <Helmet>
          <title>Gmail Docs</title>
        </Helmet>
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Gmail Docs</h1>
      </div>
    </div><div className="home">
        <div class="container">
          <Link to="/blog/this-is-a-post-title">
            <div class="row align-items-center my-5">
              <div class="col-lg-7">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x500"
                  alt="" />
              </div>
              <div class="col-lg-5">
                <h1 class="font-weight-light">This is a post title1</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></>
      
  );
}

export default Abouter;