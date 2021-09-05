

//db.js

const mongoose = require('mongoose')



//const url =   "mongodb+srv://shahid:bsef16m028@cluster0.bt06e.mongodb.net/PostApp?retryWrites=true&w=majority";
//`mongodb+srv://sample_user:<password>@my-sample-cluster-b3ugy.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const url="mongodb://shahid:shahid@127.0.0.1:27017/MyPostApp";
//const url="mongodb://"+env.DB_USER+env.DB_PASSWORD+"@127.0.0.1:27017/"+env.DB_NAME;

//const url = `mongodb://${env.DB_USER}:${env.DB_PWD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_DBNAME}`;

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