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
                      Good morning,this is my first time talking to somebody that i cannot see i must say the secrecy makes me want to speak up more.
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
                      That's great i am Ruby,i am here to help you go through your rough times,i am available 24/7.
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
                        Well let us get into it i am gowing through a crisis the other day at school people kept on calling me fat,i run into the bathroom an locked myself,i texted my dad and he came for me.
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                </div>
                <div className="row msg_container base_sent">
                  <div className="col-xs-10 col-md-10">
                    <div className="messages msg_sent">
                      <p>
                       First of im sorry about the kids at school,the journey to self love begins with self acceptance.You have to be okay with whether they love you or not.You are beautiful no matter what anyone tells you.
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
                       That's the thing everyone keeps on telling me what i want to hear but nobody is willing to go through the pain with me i break everytime people make fun of me.
                      </p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </div>
                </div>
                <div className="row msg_container base_sent">
                  <div className="col-md-10 col-xs-10 ">
                    <div className="messages msg_sent">
                      <p>
                      Listen you have the power to control what peoples words do to you some people are mean because of what happened to them and no matter what they do they can not move past that be the biggetr person and keep away from all that people say about you.I am sending you a link to refer to i wrote it and it shows how to deal with bullying.
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
