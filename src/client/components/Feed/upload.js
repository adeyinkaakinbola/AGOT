import React, { useState } from 'react';
import { Upload, Icon, message } from 'antd';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const Avatar = ({ setFiles }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageurl] = useState();

  const handleChange = (e) => {
    if (e.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (e.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(e.file.originFileObj, (imageUrl) => {
        setImageurl(imageUrl);
        setLoading(false);
        setFiles(e.file.originFileObj);
      });
    }
  };

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'file-image'} />
      <div className="ant-upload-text">Add an image</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default Avatar;
