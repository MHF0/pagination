const express = require('express');
const { gitEmployees } = require('../db');
const router = express.Router();


router.get('/', async (req, res) => {
    let { page, size } = req.query
    if (!page) {
        page = 1
        size = 3
    }
    else {
        page = Number(page)
        size = Number(size)
    }
    const employees = await gitEmployees(page, size);
    res.render('pages/home', {
        employees,
        page
    });
});


module.exports = router;