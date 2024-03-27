document.addEventListener('DOMContentLoaded', function () {
  // 등록 버튼 요소 가져오기
  const registerBtn = document.querySelector('.btn.btn-primary');

  // 등록 버튼 클릭 이벤트 리스너 추가
  registerBtn.addEventListener('click', function () {
    // 경고창 표시
    alert('게시글이 작성되었습니다.');
  });
});
