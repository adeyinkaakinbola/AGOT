import React from "react";

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="col abouthead" align="center">
          <h2>About</h2>
        </div>
      </div>
      <div class="container">
        <hr />

        <div class="row">
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title" align="center">
                  WE
                </h4>
                <p class="desc">Some small description goes here</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://s9.postimg.org/ojb106167/image.jpg" />{" "}
              </div>
              <figcaption class="info-wrap">
                <h4 class="title" align="center">
                  ARE
                </h4>
                <p class="desc">Some small description goes here</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://s9.postimg.org/4ooze1tof/image.jpg" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title" align="center">
                  AGOT
                </h4>
                <p class="desc">Some small description goes here</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
