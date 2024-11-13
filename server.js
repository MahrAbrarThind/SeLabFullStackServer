import express from 'express';
import dotenv from 'dotenv';

//importing routes
import userRoutes from './Routes/userRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import { connectDB } from './Config/connectDB.js';

const app = express();
app.use(express.json());


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