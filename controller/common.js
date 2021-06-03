function index (req, res, next) {
  res.render('index.html')
}

function documentation (req, res, next) {
  res.render('documentation.html')
}

function privacy (req, res, next) {
  res.render('privacy.html')
}

function terms (req, res, next) {
  res.render('terms.html')
}

function login (req, res, next) {
  res.render('user/login.html')
}

module.exports = { index, documentation, privacy, terms, login }
