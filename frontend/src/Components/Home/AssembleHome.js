import React from "react";
import Bar from "./ImageBar";
import Post from "../Post";
import { posts } from "./PostData";

const div = {
  width: "600px",
};

const getPosts = () => {
  return (
    <div>
      {posts.map((item) => (
        <Post
          src={item.img}
          location={item.place}
          user={item.name}
          key={item.key}
        />
      ))}
    </div>
  );
};

export default function AssembleHome() {
  return (
    <div>
      <Bar />
      <br />
      {/* <Post /> */}
      {getPosts()}
    </div>
  );
}
