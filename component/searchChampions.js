'use strict';
const axios = require("axios");
const { dataNormalize, textVerify } = require("../utils/utils");

const searchChampions = async ( champion ) => {

    try {
        const verifyText = textVerify(champion);
        const { data: { data } } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/${verifyText ? 'champion/' + verifyText : 'champion'}.json`);

        return dataNormalize(data);
    } catch (error) {
        return error;
    }
}

module.exports = { searchChampions }