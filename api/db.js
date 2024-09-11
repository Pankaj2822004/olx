const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const main = async () => {
  try {
    await mongoose.connect('mongodb+srv://panakajpandey522:Pankaj7772825@cluster1.uiaz3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
};


module.exports = main;

 