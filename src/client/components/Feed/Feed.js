import React from "react";
import Chat from "./chat";
import Posts from './Posts'

export default function Feed() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="card new-post">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 border-right">
                    <h4>Add New Post</h4>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div className="form-group row">
                        <label className="col-md-12 col-form-label">
                          How do you feel?
                        </label>
                        <div className="col-md-12">
                          <textarea
                            id="textarea"
                            name="textarea"
                            cols="40"
                            rows="5"
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="col-md-7 addpost">
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
         

         <Posts />
        </div>
      </div>
      <div className="chatSection">
        <Chat />
      </div>
    </div>
  );
}
