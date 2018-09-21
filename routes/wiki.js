var express = require('express');
var app = express();
var router = express.Router();
const index = require('../views/index.js')
const {Page} = require('../models')



router.get('/', async (req, res, next) => {
    const allPages = await Page.findAll();
    res.send(index.main(allPages))
    // res.send(index.main(allPages));

})
router.post('/', async (req, res, next) => {

    const page = new Page( {
        title: req.body.title,
        content: req.body.content,
        status:req.body.status
    })

    try {
        await page.save();
        console.log(page.dataValues)
        res.redirect(`/wiki/${page.slug}`)
    } catch (err) {next(err)}

})

router.get('/add', (req, res) => {
    res.send(index.addPage())
})

router.get('/:slug', async (req, res, next) => {
   try {
    const foundPage = await Page.findOne({
       where: {slug: req.params.slug}
   })
    res.send(index.wikiPage(foundPage))
    } catch (err) {next(err)}
})





module.exports = router;
