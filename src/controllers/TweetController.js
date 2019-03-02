const Tweet = require('../models/Tweet');

find = async (req, res) => {
    const tweets = await Tweet.find({}).sort('-createdAt');
    return res.json(tweets);
};

create = async (req,res) =>{
    const tweet = await Tweet.create(req.body);
    return res.json(tweet);
};

module.exports = {
    find,
    create
};