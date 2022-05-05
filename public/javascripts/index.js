window.onload = async function () {
    setTimeout(initView, 1300);
}

/* 초기 화면 세팅 */
const initView = () => {
    //로딩 class 모두 제거.
    removeLoadingItem();

    //로그인 버튼 이벤트 
    document.getElementById("sign_in").addEventListener("click", function() {
        setLoginModal();
    })

    //회원가입 버튼 이벤트
    document.getElementById("sign_up").addEventListener("click", function() {
        //setLoginModal();
    })


}






