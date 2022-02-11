const dataNormalize = (data) => {
    let championNormalized = [];
    for (let champion in data) {
        championNormalized.push(normalize(data[champion])); 
    }

    return championNormalized;
}

const textVerify = (text) => {
   return text ? text.charAt(0).toUpperCase() + text.slice(1) : false;
}

const normalize = (data) => {
    let { name, title, blurb, info, tags, stats, image } = data;
    return {
        name,
        title,
        description: blurb,
        info,
        tags,
        stats,
        splash: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`,
        loadingScreen: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`,
        squareAssets: `http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${name}.png`,
    }
};


module.exports = { normalize, textVerify,dataNormalize };