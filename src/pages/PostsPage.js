import React, { useEffect } from "react";
import { connect } from "react-redux";

// Bring in the asynchronous fetchPosts action
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ poststate, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (poststate.loading) return <p>Loding ...</p>;
    if (poststate.hasErrors) return <p>Oooh ! Something went Wrong!</p>;
    return poststate.posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// Map Redux State to react component props
const mapStateToProps = (state) => ({
  poststate: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
