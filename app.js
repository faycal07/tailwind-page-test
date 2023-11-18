const express = require("express")
const path = require('path')

const app = express();

app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js',express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/dist',express.static(path.join(__dirname,'dist')))



app.get("/output.css", (req, res) => {
  res.sendFile(path.join(__dirname,'dist', 'output.css'))
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
});

app.listen(5000, () => {
    console.log('Listening on port' + 5000)
})
