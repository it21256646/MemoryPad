import bodyParser from "body-parser";
import  express  from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"30mb", extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended : true}));

app.use(cors());

app.use('/posts',postRoutes);


const CONNECTION_URL = 'mongodb+srv://kasunkarunarathne34:yb8uiNY4SegEbPai@cluster0.i0a8fix.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> app.listen(PORT,()=>console.log(`Server is Running on Port ${PORT}`)))
.catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);


//yb8uiNY4SegEbPai