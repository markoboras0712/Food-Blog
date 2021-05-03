import Vuex from "vuex";
import axios from "axios";

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
                return axios.get('https://daca-blog-default-rtdb.firebaseio.com/posts.json')
                .then(res=> {
                    const postsArray = [];
                    for(const key in res.data){
                        postsArray.push({...res.data[key], id: key})
                    }
                    vuexContext.commit("SET_POSTS", postsArray);
                })
                .catch(e=> context.error(e));
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