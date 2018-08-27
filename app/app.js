
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session'; 

import $config from '../config/config.json';
import router from './router';

const app = express();

app.use((req, res, next) => {
    res.locals.config = $config;
    next();
});

/*Motor de plantillas*/
app.set('views', 'app/index');
app.set('view engine', $config.views.engine);

app.use(favicon(path.join(__dirname,'../public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: $config.session.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(express.static(path.join(__dirname, '../public')));

//router
router(app);

//Disabling x-powered-by
app.disable('x-powered-by');

app.listen($config.servePort || 3000);
