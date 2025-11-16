import express from 'express';

const app = express();
const port = 3000;

/*** 
 * Middleware configuration
 ***/

// Add this line to parse the request body as JSON
// app.use(express.json());

// Add this line to parse the request body as URL-encoded data
// app.use(express.urlencoded({ extended: true }));

// Add this line to enable CORS (run `npm i cors` and `npm i -D @types/cors`)
// app.use(cors());

// Add this line to secure the app by setting various HTTP headers (run `npm i helmet` and `npm i -D @types/helmet`)
// app.use(helmet());

// Add this line when the app is behind a reverse proxy
// app.enable('trust proxy');

/*** 
 * Template engine configuration
 * Do not forger to `npm install ...` for the engine you choosed
 ***/
// app.set('view engine', '...');
// app.set('views', './views'); // add views directory in nodemon.json `watch` array

/*** 
 * Routes configuration 
 ***/
// It is recommended to group routes by feature in a separate file (commonly in src/endpoints/ or src/routes/)
// Use `app.use(...)` to mount the routes

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Request fallback when no endpoint matches
app.use((req, res, next) => {
    res.status(404).send('Not found');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
