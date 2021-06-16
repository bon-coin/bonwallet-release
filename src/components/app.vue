<template>
    <div class="app_container">
        <app-header :page_name="page_name" />
        <router-view> </router-view>
    </div>

</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import AppHeader from "./app_header/app_header.vue";
import MainPage from "./main_page/main_page.vue";
import DownloadsPage from "./downloads_page/downloads_page.vue";

Vue.use(VueRouter);
const routes = [
    {path: "/", component: MainPage},
    {path: "/downloads", component: DownloadsPage},
];
const router = new VueRouter({routes});

export default {
    data: function(){
        return {
            page_name: ""
        }
    },
    components:{
        "app-header": AppHeader
    },
    router,
    mounted(){
        router.beforeEach((to, from, next)=>{
            if(to.path === "/downloads") {
                this.page_name = "Installation"; 
            }else{
                this.page_name = "";
            }
            next();
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
