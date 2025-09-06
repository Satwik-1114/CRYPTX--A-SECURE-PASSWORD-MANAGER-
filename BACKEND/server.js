const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');

const User = require('./models/User');
const Vault = require('./models/Vault');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://hanimeenugu:Hanimeenugu@cluster0.xvbdxds.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Register
app.post('/register', async (req, res) => {
    const { username, masterKey } = req.body;
    const masterKeyHash = CryptoJS.SHA256(masterKey).toString();

    try {
        const existing = await User.findOne({ username });
        if (existing) return res.status(400).json({ message: 'Username already exists' });

        const user = new User({ username, masterKeyHash });
        await user.save();
        res.json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { username, masterKey } = req.body;
    const masterKeyHash = CryptoJS.SHA256(masterKey).toString();

    try {
        const user = await User.findOne({ username });
        if (!user || user.masterKeyHash !== masterKeyHash) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Store password
app.post('/store', async (req, res) => {
    const { username, description, encryptedPassword } = req.body;

    try {
        const vault = new Vault({ username, description, encryptedPassword });
        await vault.save();
        res.json({ message: 'Password stored' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Retrieve password
app.post('/retrieve', async (req, res) => {
    const { username, description } = req.body;

    try {
        const entry = await Vault.findOne({ username, description });
        if (!entry) return res.status(404).json({ message: 'Not found' });

        res.json({ encryptedPassword: entry.encryptedPassword });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
