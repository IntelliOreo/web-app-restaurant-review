// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/UserRoutes');
// const reviewRoutes = require('./routes/ReviewRoutes');
// const notesRoutes = require('./routes/NotesRoutes');
// const sessionRoutes = require('./routes/SessionRoutes');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // import path from 'path'
// // import cors from 'cors'
// dotenv.config()
// // Instantiate Express App
// const app = express()
// const PORT = 3000

// // Middlewares
// app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())

// mongoose.set('strictQuery', false)
// const sessionStore = MongoStore.create({
//   mongoUrl: process.env.MONGO_URI,
//   collection: 'sessions'
// })

// app.use(
//   session({
//     secret: 'secretNoteAppKey123!',
//     resave: false,
//     saveUninitialized: true,
//     store: sessionStore,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 //lasts for 1 day (info stored server-side)
//     }
//   })
// )

// // app.use(cors(--Needs cors options here--))

// // Routes
// app.use('/api/notes', notesRoutes)
// app.use('/api/user', userRoutes)
// app.use('/api/review', reviewRoutes)
// //app.use('/api/session', sessionRoutes)
// // app.post('/api/user/signIn', (req, res) => {
// //     console.log('req.body' + Object.values(req.body)[0], Object.values(req.body)[1])
// //     return res.sendStatus(200);
// // });
// // Not Found
// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/'));
// })

// app.use((error, req, res, next) => {
//     return res.status(400).send("You in the wrong place");
// });

// app.use((err, req, res, next) => {
//   console.log(err)
//   const defaultErr = { error: 'An error occur' }
//   const errObj = Object.assign({}, defaultErr, err)
//   console.log('errObj in global handler', errObj)
//   res.status(500).json(errObj)
// })

// // Connect to database
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   })
//   .then(() => {
//     console.log('Connected to Mongo Database')
//   })
//   .catch((e) => {
//     console.log('Unable to connect to database')
//     console.error('Mongo ERROR:', e)
//   })

// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`)
// })


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoutes');
const reviewRoutes = require('./routes/ReviewRoutes');
const notesRoutes = require('./routes/NotesRoutes');
const sessionRoutes = require('./routes/SessionRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.set('strictQuery', false);

// Connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to Mongo Database');

    const sessionStore = MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collection: 'sessions'
    });

    app.use(
      session({
        secret: 'secretNoteAppKey123!',
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 //lasts for 1 day (info stored server-side)
        }
      })
    );

    app.use('/api/notes', notesRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/review', reviewRoutes);

    app.use('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/'));
    });

    app.use((error, req, res, next) => {
      console.log("here"+error);
      return res.status(400).send('You are in the wrong place');
    });

    app.use((err, req, res, next) => {
      console.log(err);
      const defaultErr = { error: 'An error occurred' };
      const errObj = Object.assign({}, defaultErr, err);
      console.log('errObj in global handler', errObj);
      res.status(500).json(errObj);
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((e) => {
    console.log('Unable to connect to database');
    console.error('Mongo ERROR:', e);
  });