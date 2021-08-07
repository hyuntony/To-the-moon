import models from '../models/index.js'

const createUsers = async () => {
  const user1 = new models.User({
    email: '1@email.com',
    hashed_password: 'ldfjh238c89h28dsf23',
    first_name: 'Anthony',
    last_name: 'Kim',
    balance: 1000000,
    holdings: { AAPL: 300, TSLA: 500, AMZN: 250, XOM: 800 }
  });

  const order1 = new models.Order({
    symbol: 'AAPL',
    price: 142.68,
    shares: 700,
    action: 'buy',
    open: true,
    user: user1
 });
  const order2 = new models.Order({
    symbol: 'TSLA',
    price: 649.10,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  const order3 = new models.Order({
    symbol: 'AAPL',
    price: 144.48,
    shares: 400,
    action: 'sell',
    open: false,
    user: user1
 });
  const order4 = new models.Order({
    symbol: 'TSLA',
    price: 689.89,
    shares: 300,
    action: 'buy',
    open: true,
    user: user1
 });
  const order5 = new models.Order({
    symbol: 'AMZN',
    price: 3400,
    shares: 100,
    action: 'buy',
    open: true,
    user: user1
 });
  const order6 = new models.Order({
    symbol: 'AMZN',
    price: 3500,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  const order7 = new models.Order({
    symbol: 'AMZN',
    price: 3550,
    shares: 50,
    action: 'sell',
    open: false,
    user: user1
 });
  const order8 = new models.Order({
    symbol: 'XOM',
    price: 61.25,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  const order9 = new models.Order({
    symbol: 'XOM',
    price: 61.50,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  const order10 = new models.Order({
    symbol: 'XOM',
    price: 63.45,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  const order11 = new models.Order({
    symbol: 'XOM',
    price: 59.15,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  const order12 = new models.Order({
    symbol: 'XOM',
    price: 58.99,
    shares: 200,
    action: 'buy',
    open: true,
    user: user1
 });
  
  const watchlist1 = new models.Watchlist({
    user: user1,
    symbol: "AAPL"
  });
  const watchlist2 = new models.Watchlist({
    user: user1,
    symbol: 'TSLA'
  });
  const watchlist3 = new models.Watchlist({
    user: user1,
    symbol: 'MSFT'
  });
  const watchlist4 = new models.Watchlist({
    user: user1,
    symbol: 'AMZN'
  });
  const watchlist5 = new models.Watchlist({
    user: user1,
    symbol: 'JPM'
  });
  const watchlist6 = new models.Watchlist({
    user: user1,
    symbol: 'V'
  });
  const watchlist7 = new models.Watchlist({
    user: user1,
    symbol: 'FB'
  });
  const watchlist8 = new models.Watchlist({
    user: user1,
    symbol: 'XOM'
  });
  
  const user2 = new models.User({
    email: '2@email.com',
    hashed_password: 'adsfsd89189h28dsf23',
    first_name: 'Kevin',
    last_name: 'Yu',
    balance: 800000,
    holdings: {}
  });
  
  const user3 = new models.User({
    email: '3@email.com',
    hashed_password: 'ldfjh238c84gq23d21k',
    first_name: 'Dexter',
    last_name: 'Gb',
    balance: 700000,
    holdings: {}
  });
  
  
  await user1.save();
  await user2.save();
  await user3.save();
  await watchlist1.save();
  await watchlist2.save();
  await watchlist3.save();
  await watchlist4.save();
  await watchlist5.save();
  await watchlist6.save();
  await watchlist7.save();
  await watchlist8.save();
  await order1.save();
  await order2.save();
  await order3.save();
  await order4.save();
  await order5.save();
  await order6.save();
  await order7.save();
  await order8.save();
  await order9.save();
  await order10.save();
  await order11.save();
  await order12.save();
}

export { createUsers };
