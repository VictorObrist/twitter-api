const Tweet = require('../models/Tweet');

create = async (req,res) =>{
    const tweet = await Tweet.findById(req.params.id);

    tweet.set({likes: tweet.likes +1 });
    
    await tweet.save();

    res.json(tweet);
};

module.exports = {
    create
};