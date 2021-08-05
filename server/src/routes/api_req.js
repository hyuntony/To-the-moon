import express from 'express';
import models from '../models/index.js';

const router = express.Router();

router.get('/watchlist/:id/:symbol', async (req, res) => {
   const userId = req.params.id
   const symbol = req.params.symbol

   const watchlists = await models.Watchlist.find().where({ user: userId, symbol: symbol})
   if (watchlists.length) {
      res.json(watchlists)
   } else {
      res.json(null);
   }
})

router.post('/watchlist', async (req, res) => {
   const { symbol, user } = req.body;
   const user1 = await models.User.findByLogin(user.email)

   user1.save(function (err) {
      if (err) res.status(500).json(err);
    
      const watchlist = new models.Watchlist({
        symbol: symbol,
        user: user1._id
      });
    
      watchlist.save(function (err) {
        if (err) return res.status(500).json(err);
        user1.watchlist.push(watchlist);
        user1.save();
        res.json('watchlist details added successfully')
      });
   });
});

router.post('/watchlist/delete', async (req, res) => {
   const { symbol, user } = req.body;

   const status = await models.Watchlist.deleteMany({ symbol: symbol, user: user['_id'] });
   // if(!status)
   res.json('watchlist removed successfully');
})


router.get('/', async (req, res) => {
   let watchlist = await models.Watchlist.findOne({symbol: 'AAPL'})
      .populate('user')
   res.json(watchlist)
})
router.post('/:id/buy', (req, res) => {
   console.log(req.body)
});
router.post('/:id/sell', (req, res) => {
   console.log(req.body)
});

export default router;