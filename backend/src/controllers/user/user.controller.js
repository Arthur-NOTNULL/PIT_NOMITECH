const UserView = require('../../views/user.view');

const me = (req, res) => {
    res.send(UserView.render(req.user)); 
}

module.exports = {
    me,
}