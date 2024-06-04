import express from 'express';
import morgan from 'morgan';
import assets from './routes/assets.routes.js';
import pkg from '../package.json' with { type: "json" };
import connectionDB from './database/database.js';
const app = express();

connectionDB();

app.set('pkg', pkg);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version
    });
});

app.use('/assets', assets);
        
export default app;