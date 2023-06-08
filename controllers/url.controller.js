const shortid = require("shortid");
const URLModel = require("../model/url.model");


exports.generateNewShortURL = async(req, res) => {
    const payload = req.body;
    
    if ( !payload.url ) return res.status(400).json({ error: "url is required" });
    
    const shortId = shortid();
    await URLModel.create({
        shortId: shortId,
        redirectUrl: payload.url,
        visitHistory: [],
    });
    
    return res.json({ id: shortId });
};

exports.fetchShortURL = async(req, res) => {
    const shortId = req.params.shortId;
    await URLModel.findOneAndUpdate( { shortId }, { $push: {
        visitHistory: { 
            timestamp: Date.now(),
        }
    }});
    res.redirect(entry.redirectUrl);
};