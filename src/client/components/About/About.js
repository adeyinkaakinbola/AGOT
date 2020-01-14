import React from "react";

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="col abouthead" align="center">
          <h2>About</h2>
          <h3>“When you’re surrounded by all these people, it can be lonelier than when you’re by yourself. You can be in a huge crowd, but if you don’t feel like you can trust anyone or talk to anybody, you feel like you’re really alone.” -Fiona Apple</h3>
          <h4>BUT AGOT HAS GOT YOU!</h4>
        </div>
      </div>
      <div class="container">
        <hr />

        <div class="row">
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://images.pexels.com/photos/2253065/pexels-photo-2253065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title" align="center">
                  WE
                </h4>
                <p class="desc">A Got You.This handles  depression most especially depression brought about by social media we intend on using social media as a means of communication to spread awareness on when to know how much  social media is enough.
</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />{" "}
              </div>
              <figcaption class="info-wrap">
                <h4 class="title" align="center">
                  ARE
                </h4>
                <p class="desc">AGOT has dedicated peer counsellers that are always online,to talk to you.Pouring out your heart we will be able to assess you and provide the help you need,the counsellers are online 24/7 and are always available to hear what you want to say.</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://images.pexels.com/photos/1182238/pexels-photo-1182238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title" align="center">
                  AGOT
                </h4>
                <p class="desc">The privacy policy in AGOT ensures that both the patient and the doctor do not know each other this gives a barrier and also makes it safe to tell the most intimate things about your life without anybody actually knowing you. </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
