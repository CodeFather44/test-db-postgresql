import { client } from "./bdd-connexion.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertDataIntoDatabase() {
  try {
    await client.connect();

    const query = "INSERT INTO users ( name ) VALUES ( 'Coucou' );";
    const result = await client.query(query);

    console.log("Grand succès!", result);

    await client.end();
  } catch (error) {
    console.error("Erreur, données non inserés", error);
  }
}

insertDataIntoDatabase();
