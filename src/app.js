import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/UsersRoute.js';
import profileRoute from './routes/ProfileRoute';
import transactionRoute from './routes/TransactionRoute.js';
import cors from 'cors';

dotenv.config();

const corsOptions = { origin: '*', optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
} 

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
        
    console.log('Connected to Db');
    
});

app.use(express.json());
app.use('/api', cors(corsOptions), userRoute);
app.use('/api', cors(corsOptions), profileRoute);
app.use('/api', cors(corsOptions), transactionRoute);

export default app;