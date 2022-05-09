window.onload = async function () {
    initView()
}

/* 초기 화면 세팅 */
const initView = () => {

    if(!getUserInfo()){
        console.log("로그인 되어있지 않음.")
        setLoginModal();
        return;
    }


    loadMyWalletView();
    


}

//로그인 정보를 가져옴.
const getUserInfo = () => {
    return true;
}


