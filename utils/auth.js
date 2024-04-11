const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('./views/radlib.handlebars');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;