module.exports = get = (app, InfoCollection) => {
    app.get("/users", async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const itemsLimit = parseInt(req.query.items) || 6;
        const skip = (page - 1) * itemsLimit;
        const result = await InfoCollection.find().skip(skip).limit(itemsLimit).toArray();
        res.send(result);
    })

    app.get("/total-items", async (req, res) => {
        const result = await InfoCollection.estimatedDocumentCount();
        res.send({ totalItems: result });
    })
  
}