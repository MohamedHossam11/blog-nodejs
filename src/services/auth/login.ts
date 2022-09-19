import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const errorCodes = require('../../constants/error_codes');
const AccountModel = require('../../models/account');
const { secretHashKey } = require('../../configs/keys');
const jwt = require('jsonwebtoken');

const sign_in_service = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const account = await AccountModel.findOne({
      where: { username },
    });

    if (!account) {
      return res.json({
        statusCode: errorCodes.invalidCredentials,
        error: 'Wrong Credentials',
      });
    }

    const match = bcrypt.compareSync(password, account.password);

    if (!match) {
      return res.json({
        statusCode: errorCodes.invalidCredentials,
        error: 'Wrong Credentials',
      });
    }

    const payLoad = {
      id: account.id,
      firstName: account.firstName,
      lastName: account.lastName,
      username: account.username,
      email: account.email,
    };

    const token = jwt.sign(payLoad, secretHashKey, {
      expiresIn: '8h',
    });

    return res.json({
      statusCode: errorCodes.success,
      user: {
        token,
        id: account.id,
        username: account.username,
      },
    });
  } catch (error) {
    res.send({
      message: 'Something went wrong',
      error: error,
      statusCode: errorCodes.internalServerError,
    });
  }
};

module.exports = {sign_in_service};
