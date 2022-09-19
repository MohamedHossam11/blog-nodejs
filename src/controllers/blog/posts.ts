const { create_post_service } = require('../../services/blog/create_post');
const { get_all_posts_service } = require('../../services/blog/get_all_posts');
import { Request, Response } from 'express';

const create_post = async (req: any, res: Response) => {
  return await create_post_service(req, res);
};

const get_all_posts = async (req: Request, res: Response) => {
  return await get_all_posts_service(req, res);
};

module.exports = { create_post, get_all_posts };
export {};
