import Blog from "../_models/blogModel";

export const getBlogs = async () => {
  const blogs = await Blog.find();
  return blogs 
}