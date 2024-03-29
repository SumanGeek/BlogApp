import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCcard = ({ $id, title, featureImage }) => {
  return (
    <Link to={"./post/${$id}"}>
      <div className="w-full bg-gray rounded-xl py-4">
        <div className="w-full justify-center mb-4">
          <img
          src={service.getFilePreview(featureImage)} //the imagae will be store in third party applications
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCcard;
