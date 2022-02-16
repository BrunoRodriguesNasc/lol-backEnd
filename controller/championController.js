const { searchChampions, searchByName } = require('../component/searchChampions');

const list =  async (req, res) => {
    const championsData = await searchChampions();
    return res.json(championsData);
}

const getByName = async (req, res) => {
    const { name } = req.params;
    const champions = await searchByName(name);
    return res.json(champions);
}

module.exports = { list, getByName }