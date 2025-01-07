const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleBooks = [
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    description: "A story of decadence and excess in Jazz Age America.",
    price: 12.99,
    imageUrl: "https://example.com/great-gatsby.jpg"
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic",
    description: "A novel about racial injustice and the loss of innocence.",
    price: 14.99,
    imageUrl: "https://example.com/to-kill-a-mockingbird.jpg"
  },
  {
    name: "1984",
    author: "George Orwell",
    category: "Science Fiction",
    description: "A dystopian novel set in a totalitarian society.",
    price: 11.99,
    imageUrl: "https://example.com/1984.jpg"
  }
];

async function seedDatabase() {
  try {
    await Book.deleteMany({});
    await Book.insertMany(sampleBooks);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
}

seedDatabase();

