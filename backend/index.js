const express = require('express');
const { PORT } = require("./utils/env");
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

