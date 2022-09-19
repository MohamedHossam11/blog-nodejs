const AccountModel = require('../../models/account');
const PostModel = require('../../models/post');
const errorCodes = require('../../constants/error_codes');
import { Request, Response } from 'express';

const create_post = async (req: any, res: Response) => {
  try {
    const { text } = req.body;
    const { id } = req.authorizedData;
    const postCreated = await PostModel.create({ text, account_id: id });
    return res.json({ statusCode: errorCodes.success, post: postCreated });
  } catch (error) {
    res.send({
      message: 'Something went wrong',
      error: error,
      statusCode: errorCodes.internalServerError,
    });
  }
};

const update_post = () => {};

const delete_post = () => {};

const get_all_posts = async (req: Request, res: Response) => {
  try {
    const { page } = req.query;
    const allPosts = await PostModel.findAndCountAll({
      include: [
        {
          model: AccountModel,
          as: 'accounts',
        },
      ],
      limit: 10,
      offset: (((typeof page === 'string' && parseInt(page)) || 1) - 1) * 10,
      order: [['id', 'DESC']],
    });
    return res.json({ statusCode: errorCodes.success, posts: allPosts });
  } catch (error) {
    res.send({
      message: 'Something went wrong',
      error: error,
      statusCode: errorCodes.internalServerError,
    });
  }
};

module.exports = { create_post, update_post, delete_post, get_all_posts };
export {};
