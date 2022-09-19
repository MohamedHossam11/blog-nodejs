import { Response, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

const { secretHashKey } = require('../../configs/keys');

const { authentication } = require('../../constants/error_codes');

module.exports = {
  verifyToken: (req: any, res: Response, next: NextFunction) => {
    jwt.verify(
      req.headers.token,
      secretHashKey,
      (err: any, authorizedData: any) => {
        if (!err) {
          const { token } = req.headers;
          req.authorizedData = authorizedData;
          req.token = token;
          return next();
        }
        return res.json({ code: authentication, error: 'breach' });
      }
    );
  },
};
export {};
