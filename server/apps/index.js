const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


require("./databases/database");

const userRouter = require("./routers/user");
const classRouter = require("./routers/class");
const topicRouter = require("./routers/topic");
const uploadaws = require("./routers/awsUploadv2");
const dashboard = require("./routers/dashboardAdmin");
const webinar = require("./routers/webinar");
const articleRouter = require("./routers/article");
const portfolioRouter = require("./routers/portfolio")
const enrolClassRouter = require("./routers/enroled");
const commentArticleRouter = require("./routers/commentArticle");
const commentClassRouter = require("./routers/commentClass");
const likeArticleRouter = require("./routers/likeArticle");
const likeClassRouter = require("./routers/likeClass");
const dailyActivityRouter = require("./routers/dailyActivity");

const bodyParser = require("body-parser");
const auth = require("./middleware/auth");

//const send = require('./middleware/awsUpload');

//app assign express
const app = express();


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json biar bisa method post pake json
app.use(bodyParser.json());

//post setting
const port = process.env.PORT || 3001;

//for debuggin wiht morgan
app.use(morgan("dev"));


//Support FE
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

//controller 
app.use(userRouter);
app.use(classRouter);
app.use(topicRouter);
app.use(enrolClassRouter);
app.use(articleRouter);
app.use(portfolioRouter);
app.use(uploadaws);
app.use(dashboard);
app.use(webinar);
app.use(commentArticleRouter);
app.use(commentClassRouter);
app.use(likeArticleRouter);
app.use(likeClassRouter);
app.use(dailyActivityRouter);

const Checkverify = (...statususer) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403); // error forbidden
        }
        next(); // lanjut 
    };
};


//for home page
app.get('/home', auth, Checkverify(true), (req, res, next) => {
    res.json({
        message: 'homepage'
    })

    //res.render('pages/home')
})

//for render login page
app.get('/', function(req, res) {
    res.json({
            message: 'Welcome to Banking-Crowd-Academy-APP Please Login'
        })
        // res.render('pages/login');
});

//for render registration page
app.get('/signup', function(req, res) {
    res.json({
            message: 'signup'
        })
        // res.render('pages/signup');
});







app.listen(port, () => {
    console.log("Server is up on port " + port);
});
