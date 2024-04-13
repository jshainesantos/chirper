import React from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const Post = ({ body, email, name, date_posted }) => {
  return (
    <div>
      <div className="card lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-16">
                <span className="text-3xl"></span>
              </div>
            </div>
            <div className="name ml-4">
              <p className="text-lg font-bold">{name}</p>
              <p>🕐 {date_posted}</p>
            </div>
          </div>

          <h2 className="card-title mt-5">{email}</h2>
          <p>
           {body}
          </p>

          <div className="flex space-x-6 text-2xl mt-3">
            <button>
              <AiTwotoneLike />
            </button>
            <button>
              <AiTwotoneDislike />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Post;
