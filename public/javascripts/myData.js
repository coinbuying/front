const loadMyDataView = () => {
    setMyDataSkeletonView();
    //스켈레톤 뷰 불러오고

    //api 요청 data
    //다 저장되면

    //1.3초뒤에 세팅
    setTimeout(setMyDataView, 1300);
}


/* 실제 데이터 컴포넌트 세팅*/
const setMyDataView = () => {

    //내 보유코인 수익률 컴포넌트
    setMyEarningsView();

    //

}

//내 보유 코인 수익률 컴포넌트

/**
 *     // <div class = "padding-lr-24 padding-b-8 flex">
    //     <p class = "font-18b  font-color-w">30,000,000 원</p>
    //     <p class = "font-12n  gray_font margin-l-8 margin-t-4">(22.05.06 13:42 기준)</p>
    // </div>
 
 toggle_select
 '
         <div class = "my_wallet_tab date_toggle  font-14n font-color-w">
            <p class = "tab_my_wallet">24시간</p>
        </div>
        <div class = "my_data_tab date_toggle font-14n font-color-w">
            <p class = "tab_my_data">7일</p>
        </div>
        <div class = "community_tab date_toggle font-14n font-color-w">
            <p class = "tab_community">30일</p>
        </div>

    */
const setMyEarningsView = () => {
    let append =
        `
    <div class = "card_title">
    <p class = "font-12n margin-r-16 title_color">일간,주간,월간별 내 수익률을 확인해보세요!</p>
    </div>

    <div class = "earning_date_select">
        <div class = "date_toggle font-color-w">
            <div class = "date_select day select">1일</div>
            <div class = "date_select weekly">7일</div>
            <div class = "date_select month">30일</div>
        </div>
    </div>

    `
    document.getElementsByClassName("my_earning_card")[0].innerHTML = append


    /*탭 선택 이벤트*/
    document.querySelector(".date_toggle").addEventListener("click", function (event) {
        if (event.target.classList.contains("date_select")) {
            if (event.target.classList.contains("select")) {
                return;
            } else {
                document.querySelector(".date_toggle > .select").classList.remove("select");
                event.target.classList.add("select");

                //내 포트폴리오 화면 구성
                if (event.target.classList.contains("day")) {
                    alert("일간")
                } else if (event.target.classList.contains("weekly")) {
                    alert("주간!")
                } else if (event.target.classList.contains("month")) {
                    alert("월간")
                }
            }
        }
    })
}



/**
 * <div class = "public_toggle_div margin-t-16 flex">
<div class = "my_wallet_tab public_toggle font-14n font-color-w">
    <p class = "skeleton-list-item" style = "width: 60px; height: 15px;"></p>
</div>
<div class = "my_data_tab public_toggle margin-l-8 font-14n font-color-w">
    <p class = "skeleton-list-item" style = "width: 60px; height: 15px;"></p>
</div>
<div class = "community_tab public_toggle margin-l-8 font-14n font-color-w">
    <p class = "skeleton-list-item" style = "width: 50px; height: 15px;"></p>
</div>
</div>

<div class = "my_property_chart m_card margin-t-16">
<div class = "card_title">
    <p class = "skeleton-list-item font-12n title_color margin-r-16 title_color" style = "width: 150px;height: 15px;"></p>
</div>
<div id = "myPropertyChart" class = "skeleton-list-item" style = "margin-left:16px; width:calc(100% - 40px); height:70px; border-radius: 6px;"></div>
</div>


<div class = "my_wallet_info full_card margin-t-16">
<div class = "card_title">
    <p class = "skeleton-list-item font-12n title_color margin-r-16 title_color" style = "width: 100px;height: 15px;"></p>
</div>
<div class = "font-12n font-color-w my_currency_info">
    <div class = "skeleton-list-item flex crpto_title flex-a-center margin-b-4" style = "width: 200px;height: 20px;">
    </div>
    <div class = "margin-l-16">
        <div class="flex skeleton-list-item"  style = "width: 100px;height: 20px;">                 
        </div>
        <div class="flex margin-t-4 skeleton-list-item"  style = "width: 100px;height: 20px;">                 
        </div>
    </div>
</div>

<div class ="flex flex-j-center">
    <p style = "border-bottom: 1px solid #9A9A9A; width: 85%; float: center; opacity: 0.3;"></p>
</div>

<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4 skeleton-list-item" style = "width: 200px;height: 20px;">
    </div>
    <div class = "margin-l-16">
        <div class="flex skeleton-list-item" style = "width: 100px;height: 20px;">                  
        </div>
        <div class="flex margin-t-4 skeleton-list-item" style = "width: 100px;height: 20px;">             
        </div>
    </div>
</div>

<div class ="flex flex-j-center">
<p style = "border-bottom: 1px solid #9A9A9A; width: 85%; float: center; opacity: 0.3;"></p>
</div>

<div class = "font-12n font-color-w my_currency_info">
    <div class = "flex crpto_title flex-a-center margin-b-4 skeleton-list-item" style = "width: 200px;height: 20px;">
    </div>
    <div class = "margin-l-16">
        <div class="flex skeleton-list-item" style = "width: 100px;height: 20px;">                  
        </div>
        <div class="flex margin-t-4 skeleton-list-item" style = "width: 100px;height: 20px;">             
        </div>
    </div>
</div>

 * 
 */
const setMyDataSkeletonView = () => {
    //HTML 한번 정리
    document.querySelector(".public-contents").innerHTML = ''

    let append =
        `
<div class = "my_earning_card ">
    <div class = "card_title">
    <p class = "skeleton-list-item font-12n margin-r-16 title_color" style = "width: 200px; height: 20px;"></p>
    </div>

    <div class = "earning_date_select">
        <div class = "date_toggle font-color-w">
            <div class = "skeleton-list-item date_select day select"  style = "width: 30px; height: 15px;"></div>
            <div class = "skeleton-list-item date_select weekly"  style = "width: 30px; height: 15px;"></div>
            <div class = "skeleton-list-item date_select month" style = "width: 30px; height: 15px;"></div>
        </div>
    </div>
</div>

</div>


    `;

    document.getElementsByClassName('public-contents')[0].insertAdjacentHTML("beforeend", append);



}