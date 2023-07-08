module.exports = deletes = (app, InfoCollection) => {
    app.delete("/remove/:id", async(req, res) => {
        const id = req.params.id;
        console.log(id);
    })
}
