import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정의
// function fetchNewsList() {
//     // return axios.get(config.baseUrl + 'news/1.json');
//     return axios.get(`${config.baseUrl}news/1.json`);
// }

// function fetchAskList() {
//     return axios.get(`${config.baseUrl}ask/1.json`);
// }

// function fetchJobsList() {
//     return axios.get(`${config.baseUrl}jobs/1.json`);
// }

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemid) {
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

function fetchList(pageName) {
    console.log(`${config.baseUrl}${pageName}/1.json`);
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    // fetchNewsList,
    // fetchAskList,
    // fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}