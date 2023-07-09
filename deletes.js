const { ObjectId } = require("mongodb");

module.exports = deletes = (app, InfoCollection) => {
    app.delete("/remove/:id", async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await InfoCollection.findOneAndDelete(query);
        console.log(result);
        res.send(result);

    })
}
