import express from 'express';
import models from '../models/index.js';
const router = express.Router();

router.post('/:id/watchlist', (req, res) => {
   console.log(req.body.symbol)
const watchlist = new models.Watchlist(req.body);
console.log(watchlist);
watchlist.save()
.then(watchlist => {
res.json('watchlist details added successfully');
})
.catch(err => {
res.status(400).send('Unable to add watchlist details in database.');
});
});
router.post('/:id/buy', (req, res) => {
    console.log(req.body)
 });
 router.post('/:id/sell', (req, res) => {
    console.log(req.body)
 });
export default router;