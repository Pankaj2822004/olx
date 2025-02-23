const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const main = async () => {
  try {
    await mongoose.connect('mongodb+srv://panku4210000:Panku420@cluster0.arvk5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
};

module.exports = main;


 