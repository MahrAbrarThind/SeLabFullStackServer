import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//importing routes
import userRoutes from './Routes/userRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import { connectDB } from './Config/connectDB.js';

const app = express();
app.use(express.json());



const corsConfig={
    origin:"*",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
  };
  app.options("",cors(corsConfig));
  app.use(cors(corsConfig))
  


//setting dotenv variable
dotenv.config();
const PORT=process.env.PORT;

connectDB();




app.use('/api/v1',userRoutes);
app.use('/api/v1',productRoutes);



app.get('/', (req, res) => {
    res.send('Hello World!');
});






app.listen(PORT, () => {
 console.log('Server running');
})