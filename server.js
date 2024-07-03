/*const express = require('express');
const mongoose = require('mongoose');
//const app = express();


const cors = require('cors');
const auth = require('./routes/auth');

const app = express();

// Middleware to parse JSON
app.use(express.json());
//app.use(express.json());
app.use(cors());
// Routes
app.use('/api/auth', auth);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern-project', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
// Import authentication routes
const auth = require('./routes/auth');

// Use authentication routes
app.use('/api/auth', auth);
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, MERN!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// Middleware



/*
// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
*/
/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', auth);

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
*/
// backend/server.js
/*const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });
*/
/*
 
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const bookingRoutes = require('./routes/booking');
const seatRoutes = require('./routes/seat');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/seats', seatRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });
*/
// backend/server.js
/*
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const bookingRoutes = require('./routes/booking');
const seatRoutes = require('./routes/seat');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/seats', seatRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });
*/
/*
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const bookingRoutes = require('./routes/booking');
const seatRoutes = require('./routes/seat');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/seats', seatRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*','/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

//  app.get('/', (req, res) => {
//      res.send('API is running...');
//    });
  
  app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });
*/
/*
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const bookingRoutes = require('./routes/booking');
const seatRoutes = require('./routes/seat');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/seats', seatRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3030;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });*/

// backend/server.js
// backend/server.js
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware'); // Corrected the import path

// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// // Import routes
// const userRoutes = require('./routes/userRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/bookings', bookingRoutes);

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
// server.js
// server.js
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// // Import routes
// const userRoutes = require('./routes/userRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/bookings', bookingRoutes);

// // Catch-all route for undefined routes
// app.use('*', (req, res) => {
//   const error = new Error(`Not Found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// });

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
// });
const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); // Import the path module
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
