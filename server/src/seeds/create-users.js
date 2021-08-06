import models from '../models/index.js'

const createUsers = async () => {
  const user1 = new models.User({
    email: '1@email.com',
    hashed_password: 'ldfjh238c89h28dsf23',
    first_name: 'Anthony',
    last_name: 'Kim',
    balance: 1000000,
    holdings: {}
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
}

export { createUsers };
