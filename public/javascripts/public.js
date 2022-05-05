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
