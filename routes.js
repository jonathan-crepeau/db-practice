const { response } = require('express');
const express = require('express');
const userModel = require('./models');
const app = express();

app.post('/add_user', async(req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});