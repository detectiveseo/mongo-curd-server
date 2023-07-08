module.exports = mongodb = (app , InfoCollection) => {
    
    app.post('/post', async (req, res) => {
        const body = req.body;
        const result = await InfoCollection.insertOne(body);
        res.send(result);
      })
}