const express = require('express')
const router = express.Router()
const { add, del, list } = require('../controller/todo')

router.get('/',list)
router.post('/add',add)
router.post('/delete',del)

module.exports = router