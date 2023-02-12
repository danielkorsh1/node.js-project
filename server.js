const express = require('express');
const mongodb = require('mongodb');

const app = express();

// Connect to MongoDB
mongodb.connect(
  'mongodb://localhost:27017/myproject',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const db = client.db();
    console.log('Connected to MongoDB');
  }
);

// Start the Express server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});