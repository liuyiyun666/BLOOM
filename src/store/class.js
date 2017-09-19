import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex) //需要vue.use


const store =new Vuex.Store({
    state:{
        classification:[]
    },
    mutations:{
        initclassData(state,classdata){
            state.classification=classdata
        }
    },
    actions:{
        getClassification(){
            Vue.prototype.$http.get("1.6/commodity/themeGroup/get?appName=BLOOM").then(res=>{
                console.log(res.data.object)
                let data = res.data.object
                store.commit("initclassData",data)
            })
        }
    }
})

export default store