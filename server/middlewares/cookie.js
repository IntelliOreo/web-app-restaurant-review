const cookieController = {}

cookieController.setCookie = (req, res, next) => {
  if (true) {
    next()
  } else {
    return next()
  }
}

export default cookieController
