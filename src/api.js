
//api key
const key = `{ac289e0eb46a4cc9b0532aecc60be48c}`;
const key_url = `key=${key}`;

//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${`ac289e0eb46a4cc9b0532aecc60be48c`}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${`ac289e0eb46a4cc9b0532aecc60be48c`}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${`ac289e0eb46a4cc9b0532aecc60be48c`}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

console.log(popularGamesURL());

//now that we have our url we need to add this to our redux store which is our big state
//this is where we will add our data
//2 index.js is where we will wrap our app with the store that holds all of our data in the application