import React from "react";

const NewPost = () => {
  return (
    <div>
      <div className="card shadow-md mt-5">
        <div className="card-body">
          <p className="text-3xl font-bold">What's crackin'?</p>
          <textarea
            placeholder="Write here..."
            className="textarea textarea-bordered textarea-lg w-full mt-4"
          ></textarea>

          <div className="flex justify-end mt-5 space-x-5">
            <button className="btn">CANCEL</button>
            <button className="btn btn-secondary">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
