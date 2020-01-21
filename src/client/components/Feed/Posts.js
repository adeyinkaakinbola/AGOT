import React from 'react';

export default function Posts({ feeds }) {

  console.log(feeds && feeds);
  return (
    <div>
      {feeds
        && feeds.map((item, i) => (
          <div className="col-md-9 post-item" key={i}>
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
                                    width: '90px',
                                    border: '1px solid #000000'
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
                              <i className="fa fa-folder-o text-danger" />
                              <a href="#">
                                <small>4th July 2018</small>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="feed-image" align="center">
                          <img src={item.photo} />
                        </div>
                        <div className="news-content">
                          <p>{item.text}</p>
                        </div>
                        <hr />
                        <div className="news-footer">
                          <div className="news-likes">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="fas fa-thumbs-up text-light" />
                              <span className="badge ">Likes 4</span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="fas fa-thumbs-down text-light" />
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
        ))}
    </div>
  );
}
