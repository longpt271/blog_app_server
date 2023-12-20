import PostCategories from "../models/PostCategories";
import Post from "../models/Post";

const createPostCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    const postCategory = await PostCategories.findOne({ title });

    if (postCategory) {
      const error = new Error("Category is already created!");
      return next(error);
    }

    const newPostCategory = new PostCategories({
      title,
    });

    const savedPostCategory = await newPostCategory.save();

    return res.status(201).json(savedPostCategory);
  } catch (error) {
    next(error);
  }
};

const getAllPostCategories = async (req, res, next) => {
  try {
    const postCategories = await PostCategories.find({});

    return res.json(postCategories);
  } catch (error) {
    next(error);
  }
};

const updatePostCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    const postCategory = await PostCategories.findByIdAndUpdate(
      req.params.postCategoryId,
      {
        title,
      },
      {
        new: true, // return new updated record
      }
    );

    if (!postCategory) {
      const error = new Error("Category was not found");
      return next(error);
    }

    return res.json(postCategory);
  } catch (error) {
    next(error);
  }
};

export { createPostCategory, getAllPostCategories, updatePostCategory };
