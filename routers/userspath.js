const express = require('express');

const UserData = require('../collections/UserStru');

const router = express.Router();

router.post('/' , UserData.createUser);
router.get('/' ,UserData.getStudent);
router.get('/:id' , UserData.specficuserdata);
router.delete('/:_id' ,UserData.delteusers);
router.put('/:id' ,UserData.updataUsersData);

module.exports = router;