import '@babel/polyfill';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

(async () => {
    const app = express();

    app.use(bodyParser.json({ type: 'application/json' }));
    
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    });
})();
