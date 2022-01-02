const path = require("path");
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
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super Ben",
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

app.use(routes);

// //ROUTES
// app.get("/", (req, res) => {
//   res.render("login");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.post("/login", (req, res) => {});
// app.get("/register", (req, res) => {
//   res.render("register");
// });
// app.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   let caseManager = await CaseManager.findByPk({email});
//   if(caseManager) {
//     return res.redirect("/register")
//   }
// const hashedPassword = await bcrypt(password, 10);
//   caseManager = new CaseManager({
//     username,
//     email,
//     password: hashedPassword
//   })
// });
// app.get("/dashboard", (req, res) => {
//   res.render("dashboard");
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
