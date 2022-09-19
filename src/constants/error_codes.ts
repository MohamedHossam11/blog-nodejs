const errorCodes: {
  success: number;
  emailExists: number;
  usernameExists: number;
  invalidCredentials: number;
  internalServerError: number;
  authentication: number;
} = {
  success: 200,
  emailExists: 450,
  usernameExists: 451,
  invalidCredentials: 452,
  authentication: 453,
  internalServerError: 500,
};

module.exports = errorCodes;
export {};
