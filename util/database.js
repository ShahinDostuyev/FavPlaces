import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync("places.db");

export async function init() {
  const promise = await database.execAsync(
    `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
            )`
  );

  return promise;
}

export async function insertPlace(place) {
  const promise = await database.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );

  return promise;
}

export async function fetchPlaces() {
  const promise = await database.getAllAsync("SELECT * FROM places");

  return promise;
}

export async function fetchPlaceDetails(id) {
  const promise = await database.getFirstAsync(
    "SELECT * FROM places WHERE id=?",
    [id]
  );

  return promise;
}
