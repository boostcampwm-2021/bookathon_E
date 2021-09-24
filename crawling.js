const cheerio = require('cheerio');
const axios = require("axios");
const iconv = require('iconv-lite');
const getHtml = async (idx) => {
    const URL = `https://i.sazoo.com/run/free/ddi_newyear/result.php?idx=${idx}`;
    try {
        return await axios({
            url: URL, 
            method: "GET", 
            responseType: "arraybuffer"
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = getData = async(idx)=>{
    const html = await getHtml(idx);
    const content = iconv.decode(html.data,"EUC-KR");
    const $ = cheerio.load(content);
    return $('ul').find('li.center').text();
}