const dataNormalize = (data) => {
    let championNormalized = [];
    for (let champion in data) {
        championNormalized.push(normalize(data[champion])); 
    }
    return championNormalized;
}

const textVerify = (text) => {
   return text ? text.charAt(0).toUpperCase() + text.slice(1).trim() : false;
}


const normalize = (data) => {
    let { id, name, title, blurb, info, tags, stats } = data;
    return {
        name,
        title,
        description: blurb,
        info,
        tags,
        stats,
        splash: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`,
        loadingScreen: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`,
        squareAssets: `http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${id}.png`,
    }
};


module.exports = { normalize, textVerify,dataNormalize };