// const {Pool} = require("pg")

// const pool = new Pool({
//     user: "postgres",
//     password: "postgres",
//     host: "localhost",
//     port: 5432
// })


// pool.get('./signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     pool.query(sql, [values], (err, data) => {
//         if(err) {
//             return res.json("Error");
//         }
//         return res.json(data)
//     })
// })

// module.exports = pool