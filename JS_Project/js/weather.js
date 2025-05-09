const locationMap = {
    // 서울특별시
    "서울 종로구": { lat: 37.5729503, lon: 126.9793579 },
    "서울 강남구": { lat: 37.5172363, lon: 127.0473248 },
    "서울 송파구": { lat: 37.5145751, lon: 127.1065971 },
    "서울 마포구": { lat: 37.5663244, lon: 126.9016368 },
  
    // 부산광역시
    "부산 해운대구": { lat: 35.1631, lon: 129.1635 },
    "부산 남구": { lat: 35.1360, lon: 129.0845 },
    "부산 수영구": { lat: 35.1457, lon: 129.1132 },
    "부산 중구": { lat: 35.1064, lon: 129.0323 },
  
    // 대구광역시
    "대구 중구": { lat: 35.8694, lon: 128.6065 },
    "대구 수성구": { lat: 35.8586, lon: 128.6305 },
  
    // 광주광역시
    "광주 동구": { lat: 35.1461, lon: 126.9220 },
    "광주 북구": { lat: 35.1740, lon: 126.9110 },
  
    // 인천광역시
    "인천 연수구": { lat: 37.4092, lon: 126.6788 },
    "인천 부평구": { lat: 37.5064, lon: 126.7208 },
  
    // 대전광역시
    "대전 서구": { lat: 36.3510, lon: 127.3789 },
    "대전 유성구": { lat: 36.3622, lon: 127.3568 },
  
    // 울산광역시
    "울산 남구": { lat: 35.5438, lon: 129.3304 },
    "울산 중구": { lat: 35.5667, lon: 129.3167 },
  
    // 경기도
    "경기 수원시": { lat: 37.2636, lon: 127.0286 },
    "경기 성남시": { lat: 37.4202, lon: 127.1268 },
    "경기 고양시": { lat: 37.6584, lon: 126.8320 },
    "경기 용인시": { lat: 37.2411, lon: 127.1776 },
  
    // 강원특별자치도
    "강원 춘천시": { lat: 37.8813, lon: 127.7298 },
    "강원 강릉시": { lat: 37.7519, lon: 128.8761 },
    "강원 원주시": { lat: 37.3390, lon: 127.9220 },
    "강원 동해시": { lat: 37.5219305555555
      , lon: 129.116633333333
  },
    "강원 태백시": { lat: 37.1612277777777
      , lon: 128.987997222222 
  },
    "강원 속초시": { lat: 38.204275
      , lon: 128.594166666666 
  },
  
    // 충청북도
    "충북 청주시": { lat: 36.6424, lon: 127.4890 },
  
    // 충청남도
    "충남 천안시": { lat: 36.8151, lon: 127.1139 },
  
    // 전북특별자치도
    "전북 전주시": { lat: 35.8242, lon: 127.1479 },
  
    // 전라남도
    "전남 여수시": { lat: 34.7604, lon: 127.6622 },
  
    // 경상북도
    "경북 포항시": { lat: 36.0190, lon: 129.3435 },
  
    // 경상남도
    "경남 창원시": { lat: 35.2285, lon: 128.6811 },
  
    // 제주특별자치도
    "제주 제주시": { lat: 33.4996, lon: 126.5312 },
    "제주 서귀포시": { lat: 33.2530, lon: 126.5602 }
  };
    
  function getBaseAndFcstTime() {
        const now = new Date();
        const hour = now.getHours();
        const baseTimes = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"];
        const baseHours = [2, 5, 8, 11, 14, 17, 20, 23];
  
        let baseIndex = baseHours.findLastIndex(h => hour >= h);
        if (baseIndex === -1) baseIndex = baseHours.length - 1;

        
        const base_time = baseTimes[baseIndex];
        const base_date = new Date(now);
        const fcstHour = (hour + 1) % 24;
        const fcstTime = (fcstHour < 10 ? "0" : "") + fcstHour + "00";
        
        if (baseTimes === '0200' && hour < 2){
          base_date.setDate(base_date.getDate() - 1);
        }

        return {
          base_date: base_date.toISOString().slice(0, 10).replace(/-/g, ''),
          base_time,
          fcstTime
        };
      }
    
    function dfs_xy_conv(lat, lon) {
        const RE = 6371.00877, GRID = 5.0, SLAT1 = 30.0, SLAT2 = 60.0, OLON = 126.0, OLAT = 38.0;
        const XO = 43, YO = 136, DEGRAD = Math.PI / 180.0;
        let re = RE / GRID;
        let slat1 = SLAT1 * DEGRAD;
        let slat2 = SLAT2 * DEGRAD;
        let olon = OLON * DEGRAD;
        let olat = OLAT * DEGRAD;
        let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
        let sf = Math.pow(Math.tan(Math.PI * 0.25 + slat1 * 0.5), sn) * Math.cos(slat1) / sn;
        let ro = re * sf / Math.pow(Math.tan(Math.PI * 0.25 + olat * 0.5), sn);
        let ra = re * sf / Math.pow(Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5), sn);
        let theta = lon * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        let x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
        let y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
        return { nx: x, ny: y };
    }
    
    async function getWeather() {
        const selected = document.getElementById('location').value;
        const { lat, lon } = locationMap[selected];
        const { nx, ny } = dfs_xy_conv(lat, lon);
        
        const { base_date, base_time, fcstTime } = getBaseAndFcstTime();
        const serviceKey = "d6cF3Nnyo1mIeT9LM8Xrs8Rq%2F9TG0TVk12HMlpbx44t71s%2F5sE8TMkBVxyPfxdpcI7miaLI75YAF82Bfl3tXSw%3D%3D";
        
        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;
  
        try {
            const response = await fetch(url);
            const data = await response.json();
            const items = data.response.body.items.item;
            
            const today = base_date;
            const tomorrow = new Date(new Date(base_date.slice(0, 4), base_date.slice(4, 6) - 1, base_date.slice(6, 8)));
            tomorrow.setDate(tomorrow.getDate() + 2);
            const tomorrowStr = tomorrow.toISOString().slice(0, 10).replace(/-/g, '');
            console.log(today);
            console.log(tomorrowStr);
            const forecasts = [today, tomorrowStr].map(date => {
                const sky = items.find(i => i.category === 'SKY' && i.fcstTime === fcstTime && i.fcstDate === date);
                const pty = items.find(i => i.category === 'PTY' && i.fcstTime === fcstTime && i.fcstDate === date);
                const tmp = items.find(i => i.category === 'TMP' && i.fcstTime === fcstTime && i.fcstDate === date);
                const reh = items.find(i => i.category === 'REH' && i.fcstTime === fcstTime && i.fcstDate === date);
                return { date, sky, pty, tmp, reh };
            });
            
            const container = document.getElementById('weather');
            container.innerHTML = forecasts.map(f => {
                const icon = getWeatherIcon(f.sky?.fcstValue, f.pty?.fcstValue);
                return `
                <div class="weather-card">
                <p class="weather-tit"><strong><${formatDate(f.date)} ${fcstTime.slice(0, 2)}시 ${selected}></strong></p>
                <img src="${icon}" class="weather-icon">
                <p class="s">날씨: ${getSkyText(f.sky?.fcstValue, f.pty?.fcstValue)}</p>
                <p class="t">기온: ${f.tmp?.fcstValue}℃</p>
                <p class="r">습도: ${f.reh?.fcstValue}%</p>
                </div>
                `;
            }).join('');
            
        } catch (err) {
          document.getElementById('weather').innerText = "날씨 정보를 가져오는 데 실패했습니다.";
          console.error(err);
        }
      }
  
      function getWeatherIcon(sky, pty) {
          if (pty === '1') return 'https://openweathermap.org/img/wn/10d.png';
          if (pty === '2' || pty === '3') return 'https://openweathermap.org/img/wn/13d.png';
          if (sky === '1') return 'https://openweathermap.org/img/wn/01d.png';
          if (sky === '3') return 'https://openweathermap.org/img/wn/03d.png';
          if (sky === '4') return 'https://openweathermap.org/img/wn/04d.png';
          return '';
        }
        
        function getSkyText(sky, pty) {
            if (pty === '1') return '🌧 비 (안전 운전 해주세요!)';
        if (pty === '2') return '🌨 비/눈 (안전 운전 해주세요!)';
        if (pty === '3') return '❄️ 눈 (안전 운전 해주세요!)';
        if (sky === '1') return '☀️ 맑음 (드라이브 하기 좋아요!)';
        if (sky === '3') return '⛅ 구름 많음';
        if (sky === '4') return '☁️ 흐림';
        return '정보 없음';
      }
  
      function formatDate(dateStr) {
        return `${dateStr.slice(0, 4)}.${dateStr.slice(4, 6)}.${dateStr.slice(6, 8)}`;
      }
