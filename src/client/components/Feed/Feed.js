import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import { Redirect } from 'react-router-dom';
import Chat from './chat';
import Posts from './Posts';
import Uploader from './upload';

const { Option } = Select;

export default function Feed(props) {
  const [feeds, setfeeds] = useState();
  const [inputs, setInputs] = useState();
  const [files, setFiles] = useState();

  useEffect(() => {
    axios
      .post('/api/getfeed')
      .then((res) => {
        setfeeds(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  function handleChange(value) {
    setInputs({ ...inputs, mood: value });
    console.log(value);
  }
  const sendPost = async () => {
    const formData = new FormData();
    formData.append('image', files);
    const createPost = await (axios.post('/api/newfeed', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      && (await axios.post('/api/newfeed', {
        ...inputs,
        photo: files ? files.name : ''
      })));
    return createPost.data ? props.history.push('/feed') : console.log('error');
    // console.log(createPost.data);
  };
  console.log(props);
  console.log(files);
  console.log(inputs);
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
                        <div className="mood-top">
                          <label className="col-md-12 col-form-label">
                            How do you feel?
                          </label>
                          <Select
                            defaultValue="Mood"
                            style={{ width: 120, marginRight: '1rem' }}
                            onChange={handleChange}
                          >
                            <Option value="moon">Moon</Option>
                            <Option value="sun">Sun</Option>
                          </Select>
                        </div>
                        <div className="col-md-12">
                          <textarea
                            id="textarea"
                            name="text"
                            cols="40"
                            rows="5"
                            className="form-control"
                            onChange={onChange}
                          />
                        </div>
                        <div className="feed-foot">
                          <div style={{ paddingLeft: '1rem' }}>
                            <Uploader setFiles={setFiles} />
                          </div>
                          <div className="addpost">
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              onClick={sendPost}
                            >
                              Post
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Posts feeds={feeds} />
        </div>
      </div>
      <div className="chatSection">
        <Chat />
      </div>
    </div>
  );
}
