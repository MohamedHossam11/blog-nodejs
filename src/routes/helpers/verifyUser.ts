import { Response, NextFunction } from 'express';

const { authentication } = require('../../constants/error_codes');
const AccountModel = require('../../models/account');

module.exports = {
  verifyUser: (req: any, res: Response, next: NextFunction) => {
    try {
      const findAccount = AccountModel.findByPk(req.authorizedData.id);
      if (!findAccount) {
        return res.json({ code: authentication, error: 'User not found' });
      }
      return next();
    } catch (exception) {
      return res.json({ code: authentication, error: 'breach exception' });
    }
  },
};
export {};
