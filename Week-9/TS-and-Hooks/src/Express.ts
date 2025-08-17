// const app = express();
// app.use(express.json());

// enum ResponseStatus {
//     NotFound = 404,
//     Success = 200,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if(!req.query.userId){
//         res.status(404).json({})
//     }
// })

// // This way you can do it --> but the problem is you have to read everytime what 404 or 411 or other status code 
// // we are dumb developers and cant remember everything 
// // so it increases the readibility 



// // Better way to do it ?? 
// // see below 

// app.get("/", (req, res) => {
//     // your code goes here
//     if(!req.query.userId){
//         res.status(ResponseStatus.NotFound).json({});
//     }
//     res.status(ResponseStatus.Success).json({});
// })

// app.listen(3000, () => {
//     console.log("your port is listening on localhost: 3000");
// })