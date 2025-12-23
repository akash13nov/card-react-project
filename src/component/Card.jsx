import React from "react";

const Card = (props) => {
  return (
    <div className="card w-[380px] p-[9px] bg-[#fcfcfc] relative rounded-[20px] overflow-hidden shadow-[0_0_14px_#ccc]">
      <div className="profile overflow-hidden rounded-[10px] h-[250px]">
        <img
          className="w-full h-[180px] object-cover object-top"
          src={props.users.coverImage}
          alt=""
        />
        <div className="user-profile absolute absolute top-[13px] left-1/2 w-[120px] h-[120px] border-4 border-white rounded-full -translate-x-1/2 translate-y-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src={props.users.profile}
            alt=""
          />
        </div>
      </div>
      <div className="bottom">
        <h1 className="text-[22px] font-semibold text-center my-5">
          {props.users.fullName}
        </h1>
        <p className="text-center mb-[30px] text-[#848484]">
          {props.users.description}
        </p>
      </div>
      <div className="likes-section flex items-center justify-around py-5 px-2.5 bg-[#f5f5f5] border border-[#efefef] rounded-[10px] mb-2.5">
        <div className="likes">
          <h4 className="font-bold">{props.users.likesCount}</h4>
          <p className="text-[#848484]">Likes</p>
        </div>
        <div className="posts">
          <h4 className="font-bold">{props.users.postCount}</h4>
          <p className="text-[#848484]">Posts</p>
        </div>
        <div className="views">
          <h4 className="font-bold">{props.users.viewsCount}</h4>
          <p className="text-[#848484]">Views</p>
        </div>
      </div>
      <div className="likes-icons flex items-center justify-center gap-10">
        <i className="ri-instagram-line"></i>
        <i className="ri-twitter-x-line"></i>
        <i className="ri-threads-line"></i>
      </div>
    </div>
  );
};

export default Card;
