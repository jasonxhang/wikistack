const express = require("express");
const morgan = require("morgan");
const layoutFunc = require('./views/layout.js')
const {db, Page, User} = require('./models');


const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send(layoutFunc('asdfasdfasd'))
})


const PORT = 3000;

const init = async () => {
  await Page.sync()
  await User.sync()
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();





