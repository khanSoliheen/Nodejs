const User = require('../model/user');

exports.getAddUser = (req, res, next) => {
    res.render('edit-user', {
        Title: 'User',
        editing: false
    });
}

exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const pinCode = req.body.pinCode;
    const user = new User({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
        pinCode: pinCode
    });
    user.save()
        .then(result => {
            console.log('Stored in database')
            res.redirect('/users');
        })
        .catch(err => {
            console.log(err);
        })

}

exports.getEditUser = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const userId = req.params.userId;
    User.findById(userId, user => {
        if (!user) {
            return res.redirect('/');
        }
        res.render('edit-user', {
            user: user,
            Title: 'User',
            editing: editMode,
            user: user
        })
    })
}

exports.postEditUser = (req, res, next) => {
    const userId = req.body.userId
    const updatedName = req.body.name
    const updatedEmail = req.body.email
    const updatedPhoneNumber = req.body.phoneNumber
    const updatedPassword = req.body.password
    const updatedConfirmPassword = req.body.confirmPassword
    const updatedPinCode = req.body.pinCode
    const updatedUser = new User(
        userId, 
        updatedName, 
        updatedEmail, 
        updatedPhoneNumber, 
        updatedPassword, 
        updatedConfirmPassword, 
        updatedPinCode)
    updatedUser.save();
    res.render('/users')
}

exports.getUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.render('users', {
                users: users,
                Title: 'Users',
            })
        }).catch(err => {
            console.log(err)
        })
}

exports.getUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findById(userId)
        .then(user => {
            res.render('user-details', {
                user: user,
                Title: 'User'
            })
        })
}

exports.postDeleteUser = (req, res, next) => {
    const userId = req.body.userId;
    User.findByIdAndDelete(userId);
    res.redirect('/users')
}
