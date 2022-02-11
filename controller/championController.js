const { searchChampions } = require('../component/searchChampions');

const list =  async ( req,res ) => {
    const champion = req.body.champion || false;
    const championsData = await searchChampions(champion || false);
    return res.json(championsData);
}

module.exports = { list }