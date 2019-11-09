const express = require('express');

const router = express.Router();


const controller = require('../controller/Controller');

router.get('/', controller.getAddUser);

router.post('/add-user', controller.postAddUser);

router.get('/users', controller.getUsers);

router.get('/users/:userId', controller.getUser);

router.get('/edit-user/:userId', controller.getEditUser);

router.post('/edit-user', controller.postEditUser);

router.post('/delete-user', controller.postDeleteUser);


module.exports = router;