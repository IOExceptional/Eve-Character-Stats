const loginServer = "login.eveonline.com";
const apiBaseUrl = "https://esi.tech.ccp.is";

const appBaseUrl = "http://localhost:3000";
const redirectUri = `${appBaseUrl}/callback`;

const clientId = "ab35f467ff6e43f8801a8a669b6fbb89";
const scopes = "esi-characterstats.read.v1";
const state = "";

const verifyPath = "/verify/";
const characterPath = "/v2/characters/{character_id}/stats/";


const logonUrl = `https://${loginServer}/oauth/authorize?response_type=token&redirect_uri=${redirectUri}&client_id=${clientId}&scope=${scopes}`;
const verifyUrl = `${apiBaseUrl}${verifyPath}`;

const characterStatsUrl = `${apiBaseUrl}${characterPath}`;

export {
    appBaseUrl,

    logonUrl,
    verifyUrl,

    characterStatsUrl
};
