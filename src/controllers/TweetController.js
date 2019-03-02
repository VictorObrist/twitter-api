const Tweet = require('../models/Tweet');

find = async (req, res) => {
    const tweets = await Tweet.find({}).sort('-createdAt');
    return res.json(tweets);
};

create = async (req,res) =>{
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet',tweet); //enviar por websocket el nuevo tweet para los usuarios online

    return res.json(tweet);
};

module.exports = {
    find,
    create
};