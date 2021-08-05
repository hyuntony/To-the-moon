import express from 'express';

const router = express.Router();

router.post('/:id/watchlist', (req, res) => {
   console.log(req.body.symbol)
});
router.post('/:id/buy', (req, res) => {
    console.log(req.body)
 });
 router.post('/:id/sell', (req, res) => {
    console.log(req.body)
 });
export default router;