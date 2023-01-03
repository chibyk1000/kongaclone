import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import style from "./Dropfileinput.module.css";

import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className={style.drop_file_input}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className={style.drop_file_input__label}>
          <img src={uploadImg.src} alt="" className="block mx-auto" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} accept="image/*" multiple />
      </div>
      {fileList.length > 0 ? (
        <div className={style.drop_file_preview}>
          <p className={style.drop_file_preview__title}>Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className={style.drop_file_preview__item}>
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] === undefined ||
                  !ImageConfig[item.type.split("/")[1]]
                    ? ImageConfig["default"].src
                    : ImageConfig[item.type.split("/")[1]].src
                }
                alt=""
              />
              <div className={style.drop_file_preview__item__info}>
                <p>{item.name}</p>
              </div>
              <span
                className={style.drop_file_preview__item__del}
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
