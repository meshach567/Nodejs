import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.set('views',  path.join(__dirname, 'views'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'filestorage/' );
    },
})