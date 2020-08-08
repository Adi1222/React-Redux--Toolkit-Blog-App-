import React, { useEffect } from "react";
import { connect } from "react-redux";

// Bring in the asynchronous fetchPosts action
import { fetchPosts } from "../actions/postsActions";

const PostsPage = () => {
  return (
    <section>
      <h1>Posts</h1>
    </section>
  );
};

export default PostsPage;
