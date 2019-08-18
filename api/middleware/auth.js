const { decodeToken } = require("../lib/token");

const isLoggedIn = (req, _res, next) => {
  if (!req.token) {
    const error = new Error(`You are not logged in.`);
    error.status = 401;
    return next(error);
  }

  try {
    decodeToken(req.token);
    next();
  } catch (e) {
    console.log(e);
    const error = new Error(`Oops...please check your credentials.`);
    error.status = 401;
    next(error);
  }
};

const isSameUser = (req, _res, next) => {
  const id = req.params.userId;
  const payload = decodeToken(req.token);
  if (payload.id === id) return next();

  const error = new Error(`You are not authorized to access this route.`);
  error.state = 401;
  next(error);
};

module.exports = { isLoggedIn, isSameUser };
