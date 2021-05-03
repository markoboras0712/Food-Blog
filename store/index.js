import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations:{
            SET_POSTS(state,posts){
                state.loadedPosts= posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext,context){
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        vuexContext.commit("SET_POSTS", [
                            {
                                id:'1',
                                title:'La Belly',
                                previewText:'Dacan speciality',
                                thumbnail:'https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg'
                              },
                              {
                                id:'2',
                                title:'Belly King',
                                previewText:'Dacan favourite burger',
                                thumbnail:'https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg'
                              },
                        ]);
                        resolve();
                    }, 1000);
                });
            },
            setPosts(vuexContext,posts){
                vuexContext.commit("SET_POSTS", posts);
            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts;
            }
        }
    });
};


export default createStore;