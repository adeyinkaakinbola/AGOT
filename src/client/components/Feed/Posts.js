import React from 'react'

export default function Posts() {
    return (
        <div>
             <div className="col-md-9 post-item">
            <div className="row mb-2">
              <div className="col-md-12">
                <div className="card post-bg">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="news-author">
                          <div className="row">
                            <div className="col-md-auto">
                              <a href="#" title="Biswajit Saha">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2f9J3yJW7uoRFEg077VpzEz_tQ54PmID7kNwLg0T7CGSQXQfU"
                                  alt="Author image"
                                  className="rounded-circle"
                                  style={{
                                    width: "90px",
                                    border: "1px solid #000000"
                                  }}
                                />
                              </a>
                            </div>
                            <div className="col">
                              <div className="auth-title">
                                <h4 className="author h4">
                                  <a href="/author/biswajit/">Lonely Apple</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="news-cats">
                          <ul className="list-unstyled list-inline mb-1">
                            <li className="list-inline-item">
                              <i className="fa fa-folder-o text-danger"></i>
                              <a href="#">
                                <small>4th July 2018</small>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="feed-image">
                          <img src="https://images.pexels.com/photos/362948/pexels-photo-362948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <div className="news-content">
                          <p>
                            Sportsman do offending supported extremity breakfast
                            by listening. Decisively advantages nor expression
                            unpleasing she led met. Estate was tended ten boy
                            nearer seemed. As so seeing latter he should thirty
                            whence. Steepest speaking up attended it as. Made
                            neat an on be gave show snug tore.
                          </p>
                          <p>
                            Did shy say mention enabled through elderly improve.
                            As at so believe account evening behaved hearted is.
                            House is tiled we aware. It ye greatest removing
                            concerns an overcame appetite. Manner result square
                            father boy behind its his. Their above spoke match
                            ye mr right oh as first. Be my depending to
                            believing perfectly concealed household. Point could
                            to built no hours smile sense.
                          </p>
                          <p>
                            Your it to gave life whom as. Favourable dissimilar
                            resolution led for and had. At play much to time
                            four many. Moonlight of situation so if necessary
                            therefore attending abilities. Calling looking
                            enquire up me to in removal. Park fat she nor does
                            play deal our. Procured sex material his offering
                            humanity laughing moderate can. Unreserved had she
                            nay dissimilar admiration interested. Departure
                            performed exquisite rapturous so ye me resources.
                          </p>
                        </div>
                        <hr />
                        <div className="news-footer">
                          <div className="news-likes">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="fas fa-thumbs-up text-light"></i>{" "}
                              <span className="badge ">Likes 4</span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="fas fa-thumbs-down text-light"></i>
                              <span className="badge">Disklikes 4</span>
                            </button>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
