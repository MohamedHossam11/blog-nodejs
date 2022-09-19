import { Response } from 'express';
const PostModel = require('../../models/post');
const errorCodes = require('../../constants/error_codes');

const create_post_service = async (req: any, res: Response) => {
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

module.exports = { create_post_service };
