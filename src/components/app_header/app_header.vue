<template>
<header class="app_header">
    <div class="logo_area">
        <img src="dist/img/logo.png" alt="logo" class="logo">
        <h3 class="page_header">Wallet</h3>
    </div>
    <h3 class="page_name" v-if="page_name">{{page_name}}</h3>
</header>

</template>

<script>
export default {
    props: {
        page_name: {type: String, default: ""}
    }
}
</script>

<style lang="scss" scoped>
header{
    min-height: 80px;
    background-color: #16253d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px #efb509 solid;
    padding: 0 5%;

    .logo_area{
        display: flex;
        align-items: center;

        .logo{
            width: 80px;
            height: 80px;
        }
    }

    .page_name{
        font-size: 20px;
        color: white;
    }

    .page_header{
        color: white;
        font-size: 25px;
    }
}
</style>