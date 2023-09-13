const { Router } = require('express');
const { getSummary, getFriendList, getAchievements, getOwnedGames, getRecentlyPlayedGames } = require('../controllers/player');

const rutas = Router();

//GetPlayerSummaries = Stefa

//GetFriendList = Maxi

//GetPlayerAchievements = Mauro
rutas.get('/logros/:id', getAchievements);

//GetOwnedGames = Franquito

//GetRecentlyPlayedGames = Emi


module.exports = rutas;