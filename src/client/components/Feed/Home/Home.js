import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://images.pexels.com/photos/3060338/pexels-photo-3060338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 1",
    caption:
      "When you’re comfortable and content with who you are, the voices of others who try and define, control or direct you are not important.",
    header: "Rachel Robins",
    key: "1"
  },
  {
    src:
      "https://images.pexels.com/photos/2057182/pexels-photo-2057182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 2",
    caption:
      "  If we are always pushing away from feelings that we condemn as wrong, painful, or ugly, we are also pushing away from the very energy that can bring us incredible joy and ecstasy.",
    header: "Shaeri Richards",
    key: "2"
  },

  {
    src:
      "https://images.pexels.com/photos/1191490/pexels-photo-1191490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 3",
    caption: "There is hope, even when your brain tells you there isn’t.",
    header: "John Green",
    key: "3"
  },

  {
    src:
      "https://images.pexels.com/photos/1391450/pexels-photo-1391450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 4",
    caption:
      "And if today all you did was hold yourself together, I’m proud of you.",
    header: "Healthy place.com",
    key: "4"
  },

  {
    src:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 5",
    caption:
      "Give yourself another day, another chance. You will find your courage eventually. Don’t give up on yourself just yet.",
    header: "Healthy place.com",
    key: "5"
  }
];

const Home = () => {
  return (
    <div>
      <UncontrolledCarousel items={items}/>
      <div class="how-section1">
        <div class="row">
          <div class="col-md-6 how-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUhAWnyZSDpa-vRwYZFY4gL1N0DueHm_NxUZjdMXgRtXZuc3nR"
              class="rounded-circle img-fluid"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <h4>MOON</h4>
            <h4 class="subheading">
              What is a moon in AGOT?
            </h4>
            <p class="text-muted">
             In AGOT a moon symbolises someone that need strength to carry on,it doesn't show your weakness rather it helps the counsellers identify you faster and easier.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4>SUN</h4>
            <h4 class="subheading">
              What is the sun in AGOT?
            </h4>
            <p class="text-muted">
         In AGOT the sun is a source of strength,users can look to the sun for motivational quotes and advice on how they went through their rough patch.Just like in science it says the moon borrows light from the sun.
            </p>
          </div>
          <div class="col-md-6 how-img">
            <img
              src="https://www.newdelhitimes.com/wp-content/uploads/2019/11/5-1.png"
              class="rounded-circle img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
