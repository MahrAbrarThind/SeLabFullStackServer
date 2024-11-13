import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
const router = express.Router();



router.post('/signup', async (req, res) => {
 const { username, email, password } = req.body;
 const hashedPassword = await bcrypt.hash(password, 10);
 const newUser = new User({ username, email, password: hashedPassword 
});
 await newUser.save();
 res.status(201).json({ message: 'User created successfully' });
});





router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
   })


export default router;
