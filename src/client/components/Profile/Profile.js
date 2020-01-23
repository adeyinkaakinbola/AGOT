import React,{useState,useEffect} from "react";
import "./Profile.css";
import Posts from "../Feed/Posts";
import axios from "axios"

export default function Profile() {
  const [feeds, setfeeds] = useState();

  useEffect(() => {
    axios
      .post('/api/getfeed')
      .then((res) => {
        setfeeds(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div class="row px-4">
      <div class="col">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 bg-dark">
            <div class="media align-items-end profile-header">
              <span class="profile mr-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2f9J3yJW7uoRFEg077VpzEz_tQ54PmID7kNwLg0T7CGSQXQfU"
                  alt="..."
                  width="130"
                  class="rounded mb-2 img-thumbnail"
                />
              </span>
              <div className="col-md-6" align="right">
                <div class=" text-white">
                  <h4 class="mt-0 mb-0">Lonely Apple</h4>
                  <h5 class="mt-0 mb-0">Sad person</h5>
                  <p class="small mb-4">Date of birth:6/5/1999</p>
                
                  <p>"I did not choose the sad life ,it chose me"</p>
                  <a href="#" class="btn btn-dark btn-sm">
                    Edit profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 d-flex justify-content-end text-center">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">1</h5>
                <small class="text-muted">
                  {" "}
                  <i class="fa fa-picture-o mr-1"></i>Post
                </small>
              </li>
            </ul>
          </div>

          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent posts</h5>
            </div>
            <div style={{ width: "90vw !important" }} align="center">
              <Posts feeds={feeds}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
