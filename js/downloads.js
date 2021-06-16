function download_file(){
    const os = window.location.hash.slice(1);
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

document.querySelector(".download_btn").addEventListener("click", download_file);