window.onload = async function () {
    setTimeout(initView, 1300);
}

/* 초기 화면 세팅 */
const initView = () => {
    //로딩 class 모두 제거.
    removeLoadingItem();

    document.getElementById("sign_up").addEventListener("click", function() {
        setLoginModal();
    })

}


const eventHanlder = () => {

    document.getElementById("sign_up").addEventListener("click", function() {
        setLoginModal();
    })
    
}




