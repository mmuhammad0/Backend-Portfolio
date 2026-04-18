const app = require('./app')
const connectDB = require('./config/db');
require('dotenv').config();

// connect database
connectDB();
const port = ProcessingInstruction.env.port || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

