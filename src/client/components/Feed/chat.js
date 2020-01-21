import React, { useState } from 'react';
import './chat.css';

export default function chat() {
  const [height, setHeight] = useState({ display: 'none', height: 0 });
  const handleChat = () => {
    setHeight(
      height.display === 'none'
        ? { display: 'block', height: 300 }
        : { display: 'none', height: 0 }
    );
  };
  return (
    <div>
      <div className="container">
        <div
          className="row chat-window col-xs-5 col-md-3"
          id="chat_window_1"
          style={{ marginLeft: '10px' }}
        >
          <div className="col-xs-12 col-md-12">
            <div className="panel panel-success">
              <div onClick={handleChat} className="panel-heading top-bar">
                <div className="col-md-8 col-xs-8">
                  <h3 className="panel-title">
                    <span className="glyphicon glyphicon-comment" />
                    Chat
                  </h3>
                </div>
                <div
                  className="col-md-4 col-xs-4"
                  style={{ textAlign: 'right' }}
                >
                  <a href="#">
                    <span
                      id="minim_chat_window"
                      className="glyphicon glyphicon-minus icon_minim"
                    />
                  </a>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-remove icon_close"
                      data-id="chat_window_1"
                    />
                  </a>
                </div>
              </div>
              <div
                className="panel-body msg_container_base"
                style={{ display: `${height.display}`, maxHeight:`${height.height}px` }}
              >
                <div className="row msg_container base_sent">
                  <div className="col-md-10 col-xs-10">
                    <div className="messages msg_sent">
                      <p>
                        that mongodb thing looks good, huh? tiny master db, and
                        huge document store
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-2 avatar">
                    <img
                      src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                      className=" img-responsive "
                    />
                  </div>
                </div>
                <div className="row msg_container base_receive">
                  <div className="col-md-2 col-xs-2 avatar">
                    <img
                      src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                      className=" img-responsive "
                    />
                  </div>
                  <div className="col-md-10 col-xs-10">
                    <div className="messages msg_receive">
                      <p>
                        that mongodb thing looks good, huh? tiny master db, and
                        huge document store
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                </div>
                <div className="row msg_container base_receive">
                  <div className="col-md-2 col-xs-2 avatar">
                    <img
                      src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                      className=" img-responsive "
                    />
                  </div>
                  <div className="col-xs-10 col-md-10">
                    <div className="messages msg_receive">
                      <p>
                        that mongodb thing looks good, huh? tiny master db, and
                        huge document store
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                </div>
                <div className="row msg_container base_sent">
                  <div className="col-xs-10 col-md-10">
                    <div className="messages msg_sent">
                      <p>
                        that mongodb thing looks good, huh? tiny master db, and
                        huge document store
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-2 avatar">
                    <img
                      src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                      className=" img-responsive "
                    />
                  </div>
                </div>
                <div className="row msg_container base_receive">
                  <div className="col-md-2 col-xs-2 avatar">
                    <img
                      src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                      className=" img-responsive "
                    />
                  </div>
                  <div className="col-xs-10 col-md-10">
                    <div className="messages msg_receive">
                      <p>
                        that mongodb thing looks good, huh? tiny master db, and
                        huge document store
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                </div>
                <div className="row msg_container base_sent">
                  <div className="col-md-10 col-xs-10 ">
                    <div className="messages msg_sent">
                      <p>
                        that mongodb thing looks good, huh? tiny master db, and
                        huge document store
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-2 avatar">
                    <img
                      src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                      className=" img-responsive "
                    />
                  </div>
                </div>
              </div>
              <div className="panel-footer" style={{ display: `${height.display}` }}>
                <div className="input-group">
                  <input
                    id="btn-input"
                    type="text"
                    className="form-control input-sm chat_input"
                    placeholder="Write your message here..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary btn-sm" id="btn-chat">
                      Send
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-group dropup">
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          >
            <span className="glyphicon glyphicon-cog" />
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu" role="menu">
            <li>
              <a href="#" id="new_chat">
                <span className="glyphicon glyphicon-plus" />
{' '}
Novo
</a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-list" />
{' '}
Ver outras
</a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-remove" />
{' '}
Fechar Tudo
</a>
            </li>
            <li className="divider" />
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-eye-close" />
{' '}
Invisivel
</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
