const axios = require('axios');
const { request, response } = require('express');

//GetPlayerSummaries = Stefa
const getSummary = (req = request, res = response) => {

}

//GetFriendList = Maxi
const getFriendList = (req = request, res = response) => {

}

//GetPlayerAchievements = Mauro
const getAchievements = (req = request, res = response) => {
    const { id } = req.params;
    console.log(id);
    res.json({ name: `Logros por ID: ${id}` });
}

//GetOwnedGames = Franquito
const getOwnedGames = (req = request, res = response) => {

}

//GetRecentlyPlayedGames = Emi
const getRecentlyPlayedGames = (req = request, res = response) => {

}

module.exports = { getSummary, getFriendList, getAchievements, getOwnedGames, getRecentlyPlayedGames };