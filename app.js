const express = require("express");
const morgan = require("morgan");
const index = require('./views/index.js')
const {db, Page, User} = require('./models');
const wikiRoutes = require('./routes/wiki')
const userRoutes = require('./routes/user')


const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/wiki', wikiRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.redirect('/wiki')
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





