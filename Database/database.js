import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "sql.itcn.dk",
  user: "kevi3758.SKOLE",
  password: "83f8HrA3wQ",
  database: "kevi37582.SKOLE",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 2,
});

(async () => {
  try {
    const [rows, fields] = await connection.query("SELECT * FROM Users");
    console.log(rows); // Result rows
  } catch (error) {
    console.error("Error executing query:", error);
  }
})();
