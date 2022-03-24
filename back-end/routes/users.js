const express = require('express');
const router = express.Router();
const repo = require('../services/user_repositories');

router.get('/:id', async (req, res) => {
    try{
        const user = await repo.get(req.params.id);
        res.json(user);
    } catch(err){
        console.log(err);
        next(err);
    }
});

router.get('/', async function(req, res, next) {
    try{
        res.json(await repo.getMultiple(req.query.page));
    } catch(err){
        console.error(err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try{
        res.json(await repo.create(req.body));
    } catch(err){
        console.error(err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try{
        res.json(await repo.update(req.params.id, req.body));
    } catch(err){ 
        console.error(err.message);
        next(err);
    }
});

router.delete('/:id', async function(req, res, next) {
    try{
        res.json(await repo.remove(req.params.id));
    } catch(err){
        console.error(err.message);
        next(err);
    }
});

module.exports = router;