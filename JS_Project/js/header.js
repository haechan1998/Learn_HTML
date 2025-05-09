// document.querySelectorAll('.menuBtn')[0].addEventListener('click', () => {
//     document.getElementById('toggleSection').classList.toggle('toggle');
//     document.getElementById('toggleSection').classList.toggle('toggleRe');
// });
// document.querySelectorAll('.menuBtn')[1].addEventListener('click', () => {
//     document.getElementById('toggleSection').classList.toggle('toggle');
//     document.getElementById('toggleSection').classList.toggle('toggleRe');
// });
// document.addEventListener('click',(e) =>{
//     console.log(e.target);
// })

let menuBtn = document.querySelectorAll('.menuBtn');
menuBtn.forEach((m)=>{
    m.addEventListener('click', () => {
        document.getElementById('toggleSection').classList.toggle('toggle');
        document.getElementById('toggleSection').classList.toggle('toggleRe');
      });
    });
    
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤 중
    header.classList.add('hide');
  } else {
    // 위로 스크롤 중
    header.classList.remove('hide');
  }
  
  lastScrollY = currentScrollY;
});

const loginUser = JSON.parse(localStorage.getItem("loginUser") || "[]");
// document.querySelector('.loginDiv').style.display = 'none';
let isLogin = false;
let id = '';

// 로그인 기능 접근성 향상
// 오브젝트 탐색 중 true 값을 가지고 있는 곳에 도착하면 break;
// 오브젝트 탐색 중 아무도 true 를 가지고 있지 않는경우 default인 false 값으로 인해 myPage 잠금.
for(let i of loginUser){

  if(i.bol){
    id = i.id;
    isLogin = true;
    document.getElementById('myPage').href = '../html/myPage.html';
    break;
  }else{
    // isLogin = false;
    document.getElementById('myPage').href = '';
  }
};

if(isLogin){
  document.querySelector('.logoutDiv').style.display = 'none';
  document.querySelector('.loginDiv').innerHTML += `<li class="id">${id}님 환영합니다.</li>`
}else{
  document.querySelector('.loginDiv').style.display = 'none';
};

document.getElementById('logoutBtn').addEventListener('click',()=>{
  localStorage.removeItem('loginUser');
  location.href="../html/mainPage.html" ;
  // location.reload(true);
});

document.getElementById('myPage').addEventListener('click',() =>{
  if(!isLogin){
    alert('로그인을 해주십시오.');
  }
  

})

// 로컬저장소 데이터 삭제.
// localStorage.removeItem('이름')