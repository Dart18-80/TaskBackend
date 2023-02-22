const app = express();

require('./database/asociations');

app.use(cors({
    origin: '*',
}));

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ extended: true, limit: '50mb' }));

//Routes
app.use('/user', require('./routes/user.router'));


app.get('/', function(req, res) {
    res.send('Task Server running.');
});



module.exports = app;