import axios from "axios";

export const PostController = {};

//get the posts
PostController.getAll = async () => {
  try {
    const posts = await axios.get("http://localhost:3000/api/posts");
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};

//create a new post
PostController.create = async (post) => {
  try {
    const newPost = await axios.post("http://localhost:3000/api/posts", post);
    return newPost.data;
  } catch (error) {
    console.log(error);
  }
};

//delete posts
PostController.delete = async (id) => {
  try {
    console.log(id);
    const response = await axios.delete(
      `http://localhost:3000/api/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
