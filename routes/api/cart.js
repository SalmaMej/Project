const express = require('express');
const router = express.Router();
const auth = require ('../../middleware/auth');

// @route  GET cart
// @desc   Test route
// @access Public

router.get('/', auth, (req,res) => res.send ('Cart route') );

module.exports = router;