const { nanoid } = require("nanoid");
const URLModel = require("../model/url.model");


exports.generateNewShortURL = async(req, res) => {
    const payload = req.body;
    
    if ( !payload.url ) return res.status(400).json({ error: "url is required" });
    
    const shortId = nanoid(7);
    await URLModel.create({
        shortId: shortId,
        redirectUrl: payload.url,
        visitHistory: [],
    });

    return res.json({ id: shortId });
};