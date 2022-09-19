import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const errorCodes = require('../../constants/error_codes');
const AccountModel = require('../../models/account');

const sign_up_service = async (req: Request, res: Response) => {
  try {
    const { username, password, first_name, last_name, email } = req.body;

    const saltKey = bcrypt.genSaltSync(10);
    const hashed_pass = bcrypt.hashSync(password, saltKey);

    const accountCreated = await AccountModel.create({
      username,
      password: hashed_pass,
      first_name,
      last_name,
      email,
    });

    return res.json({
      statusCode: errorCodes.success,
      user: accountCreated,
    });
  } catch (error) {
    res.send({
      message: 'Something went wrong',
      error,
      statusCode: errorCodes.internalServerError,
    });
  }
};

module.exports = {sign_up_service};
