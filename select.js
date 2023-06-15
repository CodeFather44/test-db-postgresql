import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "goodies",
  user: "user",
  password: "test1234",
});

async function getDataFromDatabase() {
  try {
    await client.connect();

    const query = "SELECT * FROM users;";
    const result = await client.query(query);

    console.log(result.rows); // Les données récupérées

    await client.end();
  } catch (error) {
    console.error(
      "Erreur",
      error
    );
  }
}

getDataFromDatabase();
