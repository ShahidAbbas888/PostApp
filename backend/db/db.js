

//db.js

const mongoose = require('mongoose')





const url = `mongodb://${env.DB_USER}:${env.DB_PWD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_DBNAME}`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database....`+err);
    })
