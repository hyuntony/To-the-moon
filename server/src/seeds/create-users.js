import models from '../models/index.js'

const createUsers = async () => {
  const user1 = new models.User({
    email: '1@email.com',
  });
  const user2 = new models.User({
    email: '2@email.com',
  });
  // const user3 = new models.User({
  //   email: '3@email.com',
  // });

  await user1.save();
  await user2.save();
  // await user3.save();
}

export { createUsers };
