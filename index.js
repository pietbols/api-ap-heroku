const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://62152a44cfcf7c1a8c4207bd--elegant-fermi-56e22f.netlify.app/'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('I modified this API.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
