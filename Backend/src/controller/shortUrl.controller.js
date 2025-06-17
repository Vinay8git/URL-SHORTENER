import { shortUrlServiceWithoutUser } from "../services/shortUrl.service.js";
import { getShortUrl } from "../dao/shortUrl.dao.js";
// import { generateNanoId } from "../utils/helper.js";


export const createShortUrl = async(req,res) => {
    const {url} = req.body
    const shortUrl = await shortUrlServiceWithoutUser(url);

    res.send(process.env.APP_URL + shortUrl);

}


export const redirectFromShortUrl = async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    const url = await getShortUrl(id);
    // console.log(url);
    res.redirect(url.full_url);
}