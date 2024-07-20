const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle the calculation
app.get('/calculate', (req, res) => {
    const expression = req.query.expression;
    try {
        const result = eval(expression); // Not recommended for production use
        res.send({ result });
    } catch (e) {
        res.status(400).send({ error: 'Invalid expression' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
