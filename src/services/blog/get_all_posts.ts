import { Request, Response } from 'express';
const PostModel = require('../../models/post');
const errorCodes = require('../../constants/error_codes');
const AccountModel = require('../../models/account');

const get_all_posts_service = async (req: Request, res: Response) => {
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

module.exports = { get_all_posts_service };
