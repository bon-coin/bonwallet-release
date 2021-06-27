<template>
<main>
    <div class="brief_description">
        <div class="app_img">
            <img src="dist/img/wallet_main.png">
        </div>
        <div class="app_abilities">
            <h4 class="abilities_header">Advantages</h4>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Syscoin single and multi transactions</p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Token single, multi and issue transactions</p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Simple token creation and update</p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Intuitive token and SYS manipulation </p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Built-in token explorer</p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Wallets management</p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> User-friendly Syscoin Core terminal</p>
            <p class="ability"><i class="fas fa-thumbs-up"></i> Powered by Syscoin Core</p>

            <div class="download_block">
                <div class="download_options">
                    <div class="windows_link os_link" @click="goto_page('/downloads#windows')">
                        <i class="fab fa-windows"></i>
                        Windows
                    </div>
                    <div class="linux_link os_link" @click="goto_page('/downloads#linux')">
                        <i class="fab fa-linux"></i>
                        Linux
                    </div>
                    <div class="macos_link os_link" @click="goto_page('/downloads#macos')">
                        <i class="fab fa-apple"></i>
                        MacOS
                    </div>
                </div>
    
            </div>
        </div>

    </div>

</main>
</template>

<script>
export default {
    methods:{
        goto_page(path){
            if(this.$route.path !== path){
                this.$router.push(path);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    padding-top: 3%;
    width: 90%;
    margin-left: 5%;

    .brief_description{
        display: flex;
        justify-content: space-around;


        .app_img{
            width: 55%;
    
            img{
                width: 100%;
                border-radius: 5px;
                border: 2px solid #16253d;
            }
        }
    
        .app_abilities{
            width: 43%;
            padding: 0.5% 4%;
            list-style-type: square;
    
            .abilities_header{
                text-align: center;
                color: white;
                font-size: 23px;
                font-weight: bolder;
                margin-bottom: 5%;
            }
            
            .ability{
                i{
                    color: #efb509;
                }
                color: white;
                margin-top: 2%;
                font-size: 20px;
                line-height: 1.2em;
            }
        }


        .download_block{
            margin-top: 2%;
    
            .download_options{
                display: flex;
                justify-content: center;
                color: white;
    
                .os_link{
                    display: flex;
                    flex-direction: column;
                    font-size: 30px;
                    text-align: center;
                    margin-top: 5%;
                    background-color: #16253d;
                    padding: 2%;
                    border-radius: 10px;
                    margin-left: 3%;
                    width: 30%;
                    cursor: pointer;

                    &:hover{
                        color: #efb509;
                    }
                }
            }
        }


    }



}
</style>