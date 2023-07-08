

module.exports = mongodb = (app) => {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const posts = require("./post");
  const gets = require("./get");
  const deletes = require('./deletes');
  const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.darcm8e.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      await client.connect();
      const InfoCollection = client.db("INFO").collection("stuff");

      gets(app, InfoCollection);
      posts(app , InfoCollection);
      deletes(app, InfoCollection)


    } finally {
      //   await client.close();
    }
  }
  run().catch(console.dir);

}