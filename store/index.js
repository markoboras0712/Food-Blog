import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations:{
            SET_POSTS(state,posts){
                state.loadedPosts= posts;
            },
            ADD_POST(state,post){
                state.loadedPosts.push(post);
            },
            EDIT_POST(state,editedPost){
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;
            },
            SET_TOKEN(state,token){
                state.token = token;
            },
            CLEAR_TOKEN(state){
                state.token = null;
            }

        },
        actions: {
            nuxtServerInit(vuexContext,context){
                return axios.get(process.env.baseUrl + "/posts.json")
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
            },
            addPost(vuexContext,post){
                const createdPost = {
                    ...post,
                    updatedDate : new Date()
                };
                return axios.post('https://daca-blog-default-rtdb.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost )
                .then(result=> {
                    console.log(result);
                    vuexContext.commit('ADD_POST', {...createdPost, id: result.data.name});
                }).catch(e=> console.log(e));
                },
            editPost(vuexContext,editedPost){
                return axios.put('https://daca-blog-default-rtdb.firebaseio.com/posts/' + editedPost.id + ".json?auth=" + vuexContext.state.token, editedPost)
                .then(res=> {
                    vuexContext.commit('EDIT_POST', editedPost);
                })
                .catch(e=> console.log(e));
            },
            authenticateUser(vuexContext,authData){
                let authUrl =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
                process.env.fbAPIKey;
              if (!authData.isLogin) {
                authUrl =
                  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
                  process.env.fbAPIKey;
              }
                    return axios.post(authUrl, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    }).then(result=> {
                        console.log(result);
                        vuexContext.commit("SET_TOKEN", result.data.idToken);
                        localStorage.setItem("token", result.data.idToken);
                        localStorage.setItem("tokenExpiration" , 
                        new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000);
                        Cookie.set("jwt", result.data.idToken);
                        Cookie.set("expirationDate", new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000)
                        
                    }).catch(error => {
                        console.log(error);
                    })
            },
            setLogoutTimer(vuexContext,duration){
                setTimeout(()=> {
                    vuexContext.commit("CLEAR_TOKEN");
                }, duration);
            },
            initAuth(vuexContext,req){
                let token;
                let expirationDate;
                if(req){
                    if(!req.headers.cookie){
                        return;
                    }
                    const jwtCookie = req.headers.cookie.split(';')
                    .find(c=> c.trim().startsWith("jwt="));
                    if(!jwtCookie){
                        return;
                    }
                    token = jwtCookie.split("=")[1];
                    expirationDate = req.headers.cookie.split(';')
                    .find(c=> c.trim().startsWith("expirationDate=") ).split("=")[1];
                }else {
                    token = localStorage.getItem("token");
                 expirationDate = localStorage.getItem("tokenExpiration");
                }
                 

                if(new Date().getTime() > +expirationDate || !token){
                    console.log("No token or invalid token");
                    vuexContext.dispatch("logout");
                    return;
                }
                
                vuexContext.commit("SET_TOKEN", token);
            },
            logout(vuexContext){
                vuexContext.commit("CLEAR_TOKEN");
                Cookie.remove("jwt");
                Cookie.remove("expirationDate");
                if(process.client){
                    localStorage.removeItem("token");
                    localStorage.removeItem("tokenExpiration");
                }
            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts;
            },
            isAuthenticated(state){
                return state.token != null;
            }
        }
    });
};


export default createStore;