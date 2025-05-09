// 1. 차량 데이터
/*const carList = [
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
  ]; */

  const boardList = document.getElementById('boardList');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  let carList = [];
  
  // 1. fetch로 데이터 불러오기
  fetch('../js/vehicleData.json')
    .then(res => res.json())
    .then(data => {
      carList = data.cars;
      renderList(carList);
    })
    .catch(err => {
      boardList.innerHTML = '<p> 차량 데이터를 불러올 수 없습니다.</p>';
      console.error(err);
    });
  
  // 2. 차량 출력 함수 (3개씩 줄바꿈)
  function renderList(list) {
    boardList.innerHTML = '';
  
    if (list.length === 0) {
      boardList.innerHTML = '<p>검색 결과가 없습니다.</p>';
      return;
    }
  
    // 총 개수 중앙 정렬로 표시
    const countDiv = document.createElement('div');
    countDiv.style.fontWeight = 'bold';
    countDiv.style.margin = '10px 0 20px';
    countDiv.style.textAlign = 'center';
    countDiv.innerHTML = `총 <span style="color:#3387d6;">${list.length}</span>대`;
    boardList.appendChild(countDiv);
  
    let rowDiv = null;
  
    list.forEach((car, index) => {
      if (index % 3 === 0) {
        rowDiv = document.createElement('div');
        rowDiv.className = 'car-row';
        boardList.appendChild(rowDiv);
      }
  
      const carCard = document.createElement('div');
      carCard.className = 'car-card';
      carCard.innerHTML = `
        <img src="${car.image}" alt="${car.model}">
        <h3>${car.model}</h3>
        <p>가격: ${car.price}</p>
        <p>연식: ${car.year}</p>
        <p>주행거리: ${car.km}</p>
        <p>지역: ${car.location}</p>
        <p>차량번호: ${car.num}</p>
      `;
      carCard.addEventListener('click', () => {
        location.href = `../html/detail.html?id=${car.id}`;
      });
  
      rowDiv.appendChild(carCard);
    });
  }
  
  // 3. 검색 기능
  function searchCars() {
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = carList.filter(car =>
      car.model.toLowerCase().includes(keyword) ||
      car.num.replace(/\s/g, '').includes(keyword)
    );
    renderList(filtered);
  }
  
  // 4. 이벤트 연결
  searchBtn.addEventListener('click', searchCars);
  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderList(carList);
  });
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') searchCars();
  });
  





