const express = require('express');
const app = express();
const port = 3000;

app.get('/Signup', (req, res) => {
    res.send(process.env.message)//'here is signup page');
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
});


