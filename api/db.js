// const mongoose = require('mongoose');
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const main = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://hello:world@cluster0.alizogy.mongodb.net/', options);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Could not connect to MongoDB', error);
//   }
// };

// module.exports = main;

const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
};

module.exports = main;

 