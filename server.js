const path = require("path");
const smartyStreets = require("./controllers/api/smartyStreets");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const CaseManager = require("./models/casemanager");

// const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 5001;

const sess = {
  secret: "superDave",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
//serve up static images
app.use("/images", express.static(path.join(__dirname, "./public/assets/")));
app.use("/css/", express.static(path.join(__dirname, "./public/assets/")));

app.use(routes);
app.use("/", smartyStreets);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
