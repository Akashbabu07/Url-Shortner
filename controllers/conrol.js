import Url from "../models/URl.js";
import shortid from "shortid";

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, expiresAt } = req.body;

    if (!originalUrl) return res.status(400).json({ msg: "Original URL is required" });

    const short = shortid.generate(); 

    const newUrl = await Url.create({
      originalUrl,
      shortCode: short,
      user: req.user, 
      expiresAt
    });

    res.json({
      shortUrl: `${process.env.BASE_URL}/${short}`
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await Url.findOne({ shortCode: code });
    if (!url) return res.status(404).json({ msg: "URL not found" });

    if (url.expiresAt && url.expiresAt < new Date()) {
      return res.status(410).json({ msg: "Link has expired" });
    }

    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getUserUrls = async (req, res) => {
  try {
    const urls = await Url.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(urls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};
