/**
 * 공통 함수
 */

/**
 * 초기 화면 로드시, 페이지 전체 로딩 아이템을 지워주는 함수
 */
const removeLoadingItem = () => {
    const allItem = document.querySelectorAll(".skeleton-list-item");

    allItem.forEach(element => {
          element.classList.remove('skeleton-list-item');
    });
}



// 카테고리 구성 컴포넌트 
/*

{
    myWallet : 내 자산 페이지
    myData : 나의 데이터
    community : 커뮤니티
}
*/ 
const setCategoryComponent = ({myWallet,myData,community}) => {
    
    console.log("{myWallet,myData,community}",{myWallet,myData,community})

    let append = 
    `
    <div class = "my_wallet_tab public_toggle ${myWallet ? "toggle_select" : ""} font-14n font-color-w">
        <p class = "tab_my_wallet">포트폴리오</p>
    </div>
    <div class = "my_data_tab public_toggle ${myData ? "toggle_select" : ""} margin-l-8 font-14n font-color-w">
        <p class = "tab_my_data">데이터 분석</p>
    </div>
    <div class = "community_tab public_toggle ${community ? "toggle_select" : ""}  margin-l-8 font-14n font-color-w">
        <p class = "tab_community">커뮤니티</p>
    </div>
    `
    document.getElementsByClassName("public_toggle_div")[0].innerHTML = append

    /*탭 선택 이벤트*/
    document.querySelector(".public_toggle_div").addEventListener("click", function(event) {
        if(event.target.localName === "p") {
            if(event.target.parentNode.classList.contains("toggle_select")) {
                // loadMyWalletView();
                return;
            } else {
                document.querySelector(".public_toggle_div > .toggle_select").classList.remove("toggle_select");
                event.target.parentNode.classList.add("toggle_select");

                //내 포트폴리오 화면 구성
                if(event.target.classList.contains("tab_my_wallet")) {
                    loadMyWalletView();
                } else if(event.target.classList.contains("tab_my_data")) {
                    loadMyDataView();
                } else if(event.target.classList.contains("tab_community")) {


                }
            }
        }
    })

}