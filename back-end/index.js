const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const userRouter = require('./routes/users');
const sentry = require('@sentry/node');
const tracing = require('@sentry/tracing');

sentry.init({
    dsn: "https://ae68bf206bf140a0937a91694503d751@o1102874.ingest.sentry.io/6300867",
    tracesSampleRate: 1.0,
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()) // for allowing cross-origin requests

app.get('/', (req, res) => res.send('Alive!')); // for checking if the server is alive

app.use('/user', userRouter); // for routing to user routes

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message,err.stack);
    res.status(statusCode).json({message: err.message});
    return;
});

app.listen(port, () => console.log(`Now listening on port ${port}!`));