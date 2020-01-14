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
                           Today i sat in class numb as ever feeling like my heart was about to explode.My teacher spoke and said all that he had to say on a topic that all 20 of us couldn't understand.But why did i feel so alone?Sitting in a class full of people but still feeling alone.
                           "Don't let anybody mess with your mood."Almost everybody says.But how do i do that,when i myself have the ability to blame myself for things i can not control.

                          </p>
                          <p>
                          Everybody knows i am fine afterall i am "STRONG" nothing can affect me,nothing can bring me down.My teacher who will go on with the lesson whether i am with him or not.Ofcourse he can't realise/see i am crying both on the inside and outside.
                          </p>
                          <p>
                        I am breaking and falling apart but nobody can hear a sound .Seems like everybody thinks they know me but nobody actually does,but somehow when i bring suicide in everyone jumps in and say they understand and ill be fine.You can't understand death unless you are dead.I read a quote that said i wasn't myself for ages but nobody noticed and that hit home.
              
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
