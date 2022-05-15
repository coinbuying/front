/**
 * 로그인 모달창
 * modalId : 모달창 id
 * title : 모달 제목
 *
 */

const setLoginModal = (arr) => {
    var str = "";
    let div = document.createElement('div');
   // div.id = arr[0].divID;
    div.id = "test"
    document.body.appendChild(div);
            str = '<div id="loginModal" class="create_modal_drag">'
            str += '<div class="public-modal-container modal_radius_6">'
            str += '<div class="modal_header temp_modal_header modal_header_padding_24 ">'
            str += '<div class="new_modal_title">로그인</div>'
            str += '<img class="modal_close_img">'
            str += '</div>'
            str += '<div class ="login_modal_content temp_modal_body modal_body_padding_24">'
            str += '<div class ="coinbuying_login_group">'
            str += '<div class ="login_input_group">'
            str += '<input type = "text" class ="public_text margin-tb-4" placeholder = "아이디">'
            str += '<input type = "text" class ="public_text margin-tb-4" placeholder = "비밀번호">'
            str += '</div>'
            str += '<div class ="coinbuying_login_btn margin-l-4" id = "coinbuying_login">로그인</div>'
            str += '</div>'
            str += '<div class ="flex">'
            str += '<div class ="margin-t-8 margin-r-8">회원가입</div>'
            str += '<div class ="margin-t-8">체험하기</div>'
            str += '</div>'
            str += '<div class="create_modal-footer margin_top_16" style="display: inline-block; width: 100%;">'
            str += '</div>'
            str += "</div>"
            str += '<div class="modal_button_box">';
            // str += '<input type = "button" class = "public_button margin-r-8" value = "로그인"/>'
            // str += '<input type = "button" class = "public_empty_button" value = "취소"/>'
            str += '</div>'
            str += "</div>"
            str += '</div>'
            str += '</div>'



    document.getElementById(div.id).innerHTML = str;

    $('#loginModal').css({
        "display": "block",
    });

    $(window).resize(function(){
        ResetNewModalDragging('.public-modal-container');
    });

    SetNewModalDragging('.public-modal-container', '.member_info_modal_header');

    document.querySelector(".modal_close_img").addEventListener("click",function() {
        document.getElementById("loginModal").remove();
    })

    document.getElementById("coinbuying_login").addEventListener("click",function() {
        alert("자체 로그인")
    })
    // $(document).off("click","#MemberInfoOK").on("click","#MemberInfoOK", function(){
    //     $("#"+div.id).remove();
    // });
    //
    // $(document).off("click","#member_info_modal_close").on("click","#member_info_modal_close", function(){
    //     $("#"+div.id).remove();
    // });

    //esc로 모달창 닫기 이벤트
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if(key == 27) {
            $("#"+div.id).remove();
        }
    }
}


const setRegisterModal = (arr) => {
    var str = "";
    let div = document.createElement('div');
   // div.id = arr[0].divID;
    div.id = "test"
    document.body.appendChild(div);
            str = '<div id="loginModal" class="create_modal_drag">'
            str += '<div class="register-modal-container modal_radius_6">'
            str += '<div class="modal_header temp_modal_header modal_header_padding_24 ">'
            str += '<div class="new_modal_title">회원가입</div>'
            str += '<img class="modal_close_img">'
            str += '</div>'
            str += '<div class ="login_modal_content temp_modal_body modal_body_padding_24">'
            str += '<div class ="coinbuying_login_group">'
            str += '<div class ="login_input_group">'
            str += '<input type = "text" class ="register_email public_text margin-tb-4" placeholder = "이메일">'
            str += '<input type = "text" class ="register_password public_text margin-tb-4" placeholder = "비밀번호">'
            str += '<input type = "text" class ="register_nickname public_text margin-tb-4" placeholder = "닉네임">'
            str += '<input type = "text" class ="register_api public_text margin-tb-4" placeholder = "빗썸 API KEY">'
            str += '<input type = "text" class ="register_api public_text margin-tb-4" placeholder = "업비트 API KEY">'
            str += '</div>'
            str += '</div>'
            str += '<div class ="flex">'
            str += '<div class ="coinbuying_login_btn margin-l-4" id = "register_btn">회원가입</div>'
            str += '</div>'
            str += '<div class="create_modal-footer margin_top_16" style="display: inline-block; width: 100%;">'
            str += '</div>'
            str += "</div>"
            str += '<div class="modal_button_box">';
            // str += '<input type = "button" class = "public_button margin-r-8" value = "로그인"/>'
            // str += '<input type = "button" class = "public_empty_button" value = "취소"/>'
            str += '</div>'
            str += "</div>"
            str += '</div>'
            str += '</div>'
    document.getElementById(div.id).innerHTML = str;

    $('#loginModal').css({
        "display": "block",
    });
    

    $(window).resize(function(){
        ResetNewModalDragging('.register-modal-container');
    });



    SetNewModalDragging('.register-modal-container', '.member_info_modal_header');


    document.querySelector(".modal_close_img").addEventListener("click",function() {
        document.getElementById("loginModal").remove();
    })

    document.getElementById("register_btn").addEventListener("click",function() {

        /* 회원가입 요청 */
        $.ajax({
            url: "/",
            type: "post",
            async: false,
            dataType: "JSON",//서버로 부터 돌려받을 데이터의 타입
            data: {

            },
            success: function () {
                //로그인을 하면 쿠키에 해당 정보를 저장.
                const resoponse = {
                    userId : "1", // 유저의 
                    access : "2323", // 해당 토큰으로 요청
                    refresh : "23232", //
                }

            }
        });

    })

    //esc로 모달창 닫기 이벤트
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if(key == 27) {
            $("#"+div.id).remove();
        }
    }
}


/**
 * 드래그로 인한 모달 창 위치 초기화
 * @param ModalCotentId
 * @constructor
 */
function ResetNewModalDragging(ModalCotentId) {
    const ModalContent = $(ModalCotentId);

    if((($(window).height()/2)-(ModalContent.height()/2)) >= 0){
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":(($(window).height()/2)-(ModalContent.outerHeight()/2))
        });
    }
    else{
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":0
        });
    }
}


/**
 * 모달 창 드래그 적용 및 위치 조정
 * @param ModalContentId
 * @param HeaderId
 * @constructor
 */
function SetNewModalDragging(ModalContentId, HeaderId) {
    const ModalContent = $(ModalContentId);

    if(HeaderId){
        ModalContent.draggable({
            containment: "parent",
            handle: HeaderId
        });
    }


    if((($(window).height()/2)-(ModalContent.height()/2)) >= 0){
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":(($(window).height()/2)-(ModalContent.outerHeight()/2))
        });
    }
    else{
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":0
        });
    }

}
