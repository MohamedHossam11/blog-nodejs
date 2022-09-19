import { Request, Response } from 'express';
const { sign_up_service } = require('../../services/auth/sign_up');
const { sign_in_service } = require('../../services/auth/login');

const login = async (req: Request, res: Response) => {
  return await sign_in_service(req, res);
};

const sign_up = async (req: Request, res: Response) => {
  return await sign_up_service(req, res);
};

module.exports = { login, sign_up };
