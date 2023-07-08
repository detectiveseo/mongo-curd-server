module.exports = get = (app, InfoCollection) => {
    app.get("/users", async (req, res) => {
        const result = await InfoCollection.find().toArray();
        console.log( "HITTED")
        res.send(result);
    })
}