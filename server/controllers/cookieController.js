const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  if (true) {
    next();
  } else {
    return next();
  }
};

module.exports = cookieController;
