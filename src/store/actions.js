import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/index'

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_ASK({ commit }) { // context에 commit이라는 것을 가지고 있어서 이렇게 실행 가능
    //     fetchAskList()
    //         .then(({ data }) => { // response에 data라는 것을 가지고 있어서 이렇게 실행 가능
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({ commit }, itemid) {
        fetchItemInfo(itemid)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => {
                commit('SET_LIST', data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    },
}