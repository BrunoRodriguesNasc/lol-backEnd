'use strict';
const axios = require("axios");
const { dataNormalize, textVerify } = require("../utils/utils");

const searchChampions = async () => {
    try {
        const { data: { data } } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json`);
        return dataNormalize(data);
    } catch (error) {
        return error;
    }
}

const searchByName = async (name) => {
    const { data: { data } } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${name}.json`);
    return data;
}

module.exports = { searchChampions, searchByName}