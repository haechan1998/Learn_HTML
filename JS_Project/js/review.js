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

const reviewContainer = document.getElementById('reviewList');

reviewList.forEach(review => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';

  const maskedEmail = review.user.replace(/(.{2})(.*)(@.*)/, (_, a, b, c) => {
    return a + '*'.repeat(b.length) + c;
  });

  slide.innerHTML = `
    <div class="review-card">
      <h3>${review.title}</h3>
      <p class="stars">${'★'.repeat(review.rating)}</p>
      <p>${review.content}</p>
      <p><small>${maskedEmail} | ${review.date}</small></p>
    </div>
  `;

  reviewContainer.appendChild(slide);
});

new Swiper('.mySwiper', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 20,
  mousewheel: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
});
