const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {
        navbar: 'partials/navbar.html',
        footer: 'partials/footer.html',
        head: 'partials/head.html',
        title: '!Now'
    });
});

router.get('/about-us', (req, res) => {
    res.render('about-us.html', {
        navbar: 'partials/navbar.html',
        footer: 'partials/footer.html',
        head: 'partials/head.html',
        member_card: 'partials/member-card.html',
        title: 'About us'
    });
});

router.get('/nowProfe', (req, res) => {
    res.render('nowProfe.html', {
        navbar: 'partials/navbar.html',
        footer: 'partials/footer.html',
        head: 'partials/head.html',
        title: 'NowProfe'
    });
});



module.exports = router;