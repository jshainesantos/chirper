import React from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const Post = () => {
  return (
    <div>
      <div className="card lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-16">
                <span className="text-3xl">JS</span>
              </div>
            </div>
            <div className="name ml-4">
              <p className="text-lg font-bold">JOHN SMITH</p>
              <p>Just Now</p>
            </div>
          </div>

          <h2 className="card-title mt-5">New album is released!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            consequuntur odio nam magnam maiores maxime nobis. Aut voluptas
            harum vitae hic distinctio sunt modi nulla inventore, odio et
            voluptatibus deleniti?
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
