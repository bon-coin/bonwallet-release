<template>
<main>

    <div class="notify">
        <h4 class="notify_header"><i class="fas fa-exclamation-circle"></i> Syscoin Core is required</h4>
        <p>Wallet works with Syscoin Core and you need to install Core version with <b>syscoind</b> file inside. Download it <a class="link_word" href="https://github.com/syscoin/syscoin">here</a>!</p>
    </div>

    <div class="notify">
        <h4 class="notify_header"><i class="fas fa-exclamation-circle"></i> Reindexing to build local asset index </h4>
        <p>If you previously launched syscoind without assetindex=1 in syscoin.conf, use wallet option  <b>"Launch Core with reindex"</b> during first wallet launch.</p>
    </div>

    <div class="notify">
        <h4 class="notify_header"><i class="fas fa-exclamation-circle"></i> Separate Wallet</h4>
        <p>We strongly suggest creating two separate wallets, one strictly for SYS, and the other for tokens with a smaller amount of SYS for transaction fees. This eliminates confusion and headaches related to coin control with tokens. </p>
    </div>

    <div class="notify">
        <h4 class="notify_header"><i class="fas fa-exclamation-circle"></i> Wallets with Masternodes</h4>
        <p class="very_important">Please DO NOT USE this application in wallets with Masternodes. For now we did not implement coin control and you can not lock UTXOs. </p>
    </div>
    
    <div class="btn download_btn" @click="download_file">
        I read and understood tips. Start download!
    </div>
</main>
</template>

<script>
export default {
    methods:{
        download_file(){
            const os = this.$route.hash.slice(1);
            let download_link;
            switch(os){
                case "windows": 
                    download_link = "windows_download_link";
                    break;
                case "linux":
                    download_link = "linux_download_link";
                    break;
                case "macos":
                    download_link = "macos_download_link";
                    break;
                default: throw new Error("Wrong operation system!");
            }
            window.location.href = download_link;
        }
}
}
</script>

<style lang="scss" scoped>
main{
    padding: 0 5%;
    padding-top: 1%;

    .notify{
        margin-top: 3%;
        color: #efb509;

        b{
            font-weight: bolder;
        }

        .notify_header{
            margin-bottom: 1%;
            font-size: 20px;
        }

        p{
            color: white;
            line-height: 1.5em;
        }

        .link_word{
            color: white;
        }

        .very_important{
            color: #34d926;
        }
    }

    .download_btn{
        background-color: #cd7213;
        border-radius: 5px;
        color: rgb(223, 208, 208);
        text-align: center;
        width: 40%;
        margin-left: 30%;
        margin-top: 3%;
        padding: 2%;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            color: white;
        }
    }
}
</style>
