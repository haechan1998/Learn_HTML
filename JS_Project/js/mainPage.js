// 메인 슬라이드 기능

const slideContainer = document.getElementById('slide_section_id');
const slides = Array.from(slideContainer.children);
const slideWidth = 1400;
let currentSlide = 1;
let isSliding = false;

// 클론: 첫 슬라이드 복제 → 끝에 추가, 마지막 슬라이드 복제 → 앞에 추가
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slideContainer.appendChild(firstClone);
slideContainer.insertBefore(lastClone, slides[0]);

// 슬라이드 초기 위치 설정 (진짜 첫 번째 슬라이드로 이동)
const totalSlides = slides.length + 2; // 복제 포함
slideContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

// 슬라이드 전환 함수
function moveToSlide(index) {
  if (isSliding) return;
  isSliding = true;

  slideContainer.style.transition = 'transform 0.5s ease-in-out';
  slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
  currentSlide = index;

  // transition 끝났을 때 복제된 슬라이드일 경우 순간이동
  slideContainer.addEventListener('transitionend', handleLoop, { once: true });
}

function handleLoop() {
  if (currentSlide === 0) {
    slideContainer.style.transition = 'none';
    currentSlide = totalSlides - 2; // 진짜 마지막
    slideContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
  if (currentSlide === totalSlides - 1) {
    slideContainer.style.transition = 'none';
    currentSlide = 1; // 진짜 첫 번째
    slideContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }

  isSliding = false;
}

// 버튼 이벤트
document.getElementById('next_btn').addEventListener('click', () => {
  moveToSlide(currentSlide + 1);
  resetAutoSlide();
});

document.getElementById('pre_btn').addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
    resetAutoSlide();
});

// 자동 슬라이드
let autoSlide = setInterval(() => {
  moveToSlide(currentSlide + 1);
}, 3000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      moveToSlide(currentSlide + 1);
    }, 3000);
  }

  // 메인 차량 정보 기능.
  // 차량JSON
  // 1. carList 배열 만들기
const carList = [
  {
    id: 1,
    model: '2022 그랜저(IG) 가솔린 2.5 르블랑',
    price: '2,670만원',
    year: 2021,
    km: '43,506km',
    num: '278나7705',
    location: '서울',
    image: '../image/grandeur_white_2022.jpg',
    description: '깔끔한 흰색 소나타, 무사고 차량입니다.'
  },
  {
    id: 2,
    model: '2023 그랜저(GN7) 하이브리드 2WD 익스클루시브',
    price: '3,840만원',
    year: 2023,
    km: '20,266km',
    num: '376로1843',
    location: '양산',
    image: '../image/grandeur_gn7_2023.jpg',
    description: '2023년 등록된 그랜저 하이브리드 익스클루시브 모델! 무사고, 실주행 2만km로 최상의 컨디션을 자랑합니다.'
  },
  // 1.현대
  {
    id: 3,
    model: '2021 G80 가솔린 2.5 터보 AWD 시그니처 디자인 셀렉션 II',
    price: '4,580만원',
    year: 2020,
    km: '29,300km',
    num: '111러 4666',
    location: '미상',
    image: '../image/genesis_white.jpg', 
    description: '초기 등록 20년 6월, 주행거리 29,300km. 500만원 할인된 인기 차량.'
  },
  {
    id: 4,
    model: '2020 GV80 가솔린 3.5 터보 AWD 5인승 스탠다드 디자인',
    price: '4,540만원',
    year: 2020,
    km: '49,920km',
    num: '345마4955',
    location: '양산',
    image: '../image/genesis_gray.jpg', 
    description: '초기 등록 20년 7월, 할인된 인기 차량.'
  },
  // 2.제네시스
  {
    id: 5,
    model: '2022 그랜저(IG) 가솔린 2.5 르블랑',
    price: '2,670만원',
    year: 2021,
    km: '43,506km',
    location: '양산',
    num: '278나7705',
    image: '../image/grandeur_white.jpg',
    description: '21년 11월 등록, 300만원 할인 적용된 인기 차량. 무사고 흰색 차량.'
  },
  {
    id: 6,
    model: '2020 그랜저(IG) 가솔린 2.5 프리미엄 초이스',
    price: '2,390만원',
    year: 2020,
    km: '29,041km',
    location: '군산',
    num: '110고8746',
    image: '../image/grandeur_black.jpg',
    description: '20년 9월 등록, 200만원 할인. 3만km 이하 준신차급 상태.'
  },
  //3.그랜저
  {
    id: 7,
    model: 'BMW X4M (G02) 3.0',
    price: '5,190만원',
    year: 2020,
    km: '88,868km',
    num: '221우1265',
    location: '경기',
    image: '../image/bmw_x4m_red.jpg',
    description: '20년 7월 등록, 고성능 X4M SUV. 가솔린 모델, 스포츠 드라이빙에 최적화.'
  },
  {
    id: 8,
    model: 'BMW 7시리즈 (G11) 730d xDrive M 스포츠',
    price: '3,549만원',
    year: 2017,
    km: '105,228km',
    num: '134러2345',
    location: '경기',
    image: '../image/bmw_7series_black.jpg',
    description: '17년식 디젤 세단, M 스포츠 패키지 탑재. 넓은 실내와 중후한 승차감이 강점.'
  },
  //4.BMW
  {
    id: 9,
    model: '테슬라 모델 Y RWD',
    price: '4,790만원',
    year: 2024,
    km: '6,897km',
    num: '111마0674',
    location: '서울',
    image: '../image/tesla_model_y.jpg',
    description: '24년 9월 등록된 최신 테슬라 Y RWD 모델! 주행거리 6천km대의 신차급 전기 SUV.'
  },
  {
    id: 10,
    model: '테슬라 모델 3 롱 레인지',
    price: '4,150만원',
    year: 2022,
    km: '39,269km',
    num: '143라9788',
    location: '경기',
    image: '../image/tesla_model_3.jpg',
    description: '22년 3월 등록, 전기 세단 인기 모델. 긴 주행거리와 깔끔한 외관이 강점.'
  },
  //5.테슬라
  {
    id: 11,
    model: '벤츠 E-클래스 W213 E450 4MATIC 쿠페',
    price: '6,500만원',
    year: 2021,
    km: '47,115km',
    num: '897마1221',
    location: '경기',
    image: '../image/benz_eclass_e450.jpg',
    description: '21년 8월 등록된 프리미엄 쿠페! 가솔린 4륜구동, 강력한 성능과 고급스러운 디자인.'
  },
  {
    id: 12,
    model: '벤츠 GLE-클래스 W166 GLE350d 4MATIC',
    price: '3,090만원',
    year: 2016,
    km: '78,651km',
    num: '78다1234',
    location: '경기',
    image: '../image/benz_gle350d.jpg',
    description: '16년 11월식(17년형) 디젤 SUV, 넓은 공간과 안정적인 주행이 특징. 패밀리카로 적합.'
  },
  //벤츠
  {
    id: 13,
    model: '아우디 Q7 (4M) 45 TFSI 콰트로',
    price: '4,690만원',
    year: 2019,
    km: '47,158km',
    num: '976라1423',
    location: '경기',
    image: '../image/audi_q7_45tfsi.jpg',
    description: '19년 9월식 Q7 콰트로! 넓은 실내와 고급스러운 승차감, 가솔린 대형 SUV로 인기.'
  },
  {
    id: 14,
    model: '아우디 뉴 S4 3.0 TFSI 콰트로 B8',
    price: '1,290만원',
    year: 2012,
    km: '121,386km',
    num: '111러2345',
    location: '대구',
    image: '../image/audi_s4_b8.jpg',
    description: '12년 9월식(13년형), 콰트로 3.0 터보 스포츠 세단. 고성능과 클래식 감성 모두 갖춘 모델.'
  },
  //아우디
];


let strCarObj='';
const infobox = document.querySelector('.infoBox');

for(let i = 1; i<5; i++){
  const subInfo = document.querySelector(`.subInfoBox${i}`);
  searchID(i+1, subInfo);
}


function searchID(id, className){
  for(let i of carList){
    if(i.id === id){
            strCarObj =
            `<div>
              <a href="../html/searchBoard.html">
                            <p class="carName">${i.model}</p>
                <p class="carPrice">가격 : ${i.price}</p>
                <p>연식 : ${i.year}</p>
                <p>주행거리 : ${i.km}</p>
                <p>${i.location}</p>
                <p>${i.num}</p>
              </a>
            </div>`;
            // <p>${i.description}</p>
            className.innerHTML = strCarObj;
    }
  }
};
// <a href="../html/searchBoard.html"></a>
// 메인이미지
for(let i of carList){
  if(i.id === 1){
    document.querySelector('.imgBox').innerHTML = `<a href="../html/searchBoard.html"><img src="${i.image}" alt=""></a>`;
  }
}
// 서브이미지
for(let i of carList){
  for(let j=2; j<6; j++){
    if(i.id === j){
      document.querySelector(`.subImg${j-1}`).innerHTML = `<a href="../html/searchBoard.html"><img src="${i.image}" alt=""></a>`;
    }
  }
}
// 왼쪽 메인차량에 넣은 정보값.
searchID(1, infobox);

// 후기 게시판
const reviewList = [
  {
    title: '2023 그랜저(GN7) 가솔린 2.5 프리미엄',
    content: '거의 새차같은 컨디션에 너무 마음에 듭니다. 결제부터 명의이전까지 절차도 모바일로 너무 간편하고 앞으로도 다시 자동차 구매하게되면 DA 이용할것같아요.',
    user: 'jiwoo2023@naver.com',
    date: '2024.04.10',
    rating: 5
  },
  {
    title: '2024 아반떼(CN7) 하이브리드 스마트',
    content: '첫인상은 새차를 보는듯 했습니다.',
    user: 'so******@gmail.com',
    date: '2024.03.20',
    rating: 4
  },
  {
    title: '2021 GV80 가솔린 2.5 터보 AWD 시그니처',
    content: '이렇게 편하게 살수 있는게 맞나 싶을 정도 였습니다. DA기에 믿고 구매했고 선택 수령 구매 명의이전까지 편하고 응대도 친절하게 해주셨어요. 아직 한달이 채 안됐지만 좋은차 잘 받아 운행하고 있습니다. 번창하세요.',
    user: 'kimdriver87@kakao.com',
    date: '2024.04.05',
    rating: 5
  },
  {
    title: '2020 G80 가솔린 3.5 AWD',
    content: '상담도 빠르고 차 상태도 깔끔했어요. 주행감이 정말 좋아서 강력 추천합니다.',
    user: 'lee****@gmail.com',
    date: '2024.03.30',
    rating: 4
  },
  {
    title: '테슬라 모델 3 롱 레인지',
    content: '전기차 처음인데 주행감 너무 부드럽고 충전도 생각보다 편하네요. 완전 만족!',
    user: 'tesla_yj@naver.com',
    date: '2024.03.15',
    rating: 5
  },
  {
    title: '2022 쏘렌토 하이브리드 1.6 터보 그래비티',
    content: '디자인도 성능도 만족입니다. 하이브리드라 연비도 좋고, 실내도 조용해서 가족 모두 만족해요.',
    user: 'so*******@naver.com',
    date: '2024.04.02',
    rating: 5
  },
  {
    title: '2019 아우디 A6 45 TFSI 콰트로',
    content: '중고차라 걱정했는데 생각보다 훨씬 깨끗하고 주행도 안정적이에요. 브랜드 감성 그대로입니다.',
    user: 'au****@gmail.com',
    date: '2024.03.25',
    rating: 4
  },
  {
    title: '2020 K5 1.6 터보 시그니처',
    content: '출퇴근용으로 구매했는데 너무 잘 샀어요. 가격 대비 옵션도 좋고 디자인도 만족!',
    user: 'ki*******@hanmail.net',
    date: '2024.03.28',
    rating: 5
  },
  {
    title: '2023 투싼 하이브리드 인스퍼레이션',
    content: '신차급 컨디션이라서 놀랐어요. 실내도 넓고 첨단 기능도 다 들어있어 만족도 최고!',
    user: 'tu****@gmail.com',
    date: '2024.04.07',
    rating: 5
  },
  {
    title: '2018 BMW 320i 럭셔리',
    content: '처음 타보는 수입차인데 승차감이 확실히 다르네요. 부드럽고 정숙해서 마음에 들어요.',
    user: 'bm****@naver.com',
    date: '2024.03.18',
    rating: 4
  }
  
];

let postStr = '';
let count = 1;
const postSection = document.getElementById('reviewList');

for(let i of reviewList){
  
  const maskedEmail = i.user.replace(/(.{2})(.*)(@.*)/, (_, a, b, c) => {
    return a + '*'.repeat(b.length) + c;
  });

  postStr = `
    <div class="review-card review${count}">
    <h3>${i.title}</h3>
    <p class="stars">${'★'.repeat(i.rating)}</p>
    <p>${i.content}</p>
    <p><small>${maskedEmail} | ${i.date}</small></p>
  `;
  document.getElementById('reviewList').innerHTML += postStr;
  count++;
};


const postSlides = [...postSection.children];
postSlides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  postSection.appendChild(clone);
});