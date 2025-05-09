let carList = [];

fetch('../js/vehicleData.json')
  .then(res => res.json())
  .then(data => {
    carList = data.cars;  
    drawEverything();
  })
  .catch(err => console.error("데이터 불러오기 실패:", err));

function drawEverything() {
  // [1] 평균 시세 범위 계산 (그랜저(IG)만)
  const grandeurPrices = carList
    .filter(car => car.model.includes("그랜저(IG)"))
    .map(car => parseInt(car.price.replace(/[^0-9]/g, '')))
    .filter(price => !isNaN(price));

    const minPrice = Math.min(...grandeurPrices);
    const maxPrice = Math.max(...grandeurPrices);
    

  document.getElementById("priceRange").textContent =
    `${minPrice.toLocaleString()}~${maxPrice.toLocaleString()}만원`;

  // [2] 막대 그래프 (가상의 주행거리별 가격, 그대로 둠)
  const odoLabels = ["0", "1만km", "2만km", "3만km", "4만km", "5만km", "6만km"];
  const minBase = [3900, 3800, 3700, 3500, 3400, 3200, 3000];
  const maxBase = [4500, 4400, 4300, 4200, 4100, 3900, 3600];
  const range = maxBase.map((max, i) => max - minBase[i]);

  const barCtx = document.getElementById("priceChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: odoLabels,
      datasets: [
        {
          label: "최소 가격",
          data: minBase,
          backgroundColor: "transparent",
          stack: "stack1",
          barThickness: 10
        },
        {
          label: "가격 범위",
          data: range,
          backgroundColor: "skyblue",
          stack: "stack1",
          barThickness: 10
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "주행거리별 그랜저(IG) 시세" }
      },
      scales: {
        x: { stacked: true },
        y: {
          stacked: true,
          beginAtZero: false,
          title: { display: true, text: "가격 (만원)" }
        }
      }
    }
  });

  // [3] 산점도
  const scatterData = carList.map(car => ({
    x: parseInt(car.km.replace(/[^0-9]/g, '')),
    y: parseInt(car.price.replace(/[^0-9]/g, ''))
  }));

  const scatterCtx = document.getElementById("scatterChart").getContext("2d");
  new Chart(scatterCtx, {
    type: "scatter",
    data: {
      datasets: [{
        label: "중고차 가격 분포",
        data: scatterData,
        backgroundColor: "#0a2c67"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: "주행거리별 중고차 가격 분포 (단위: 만원)" }
      },
      scales: {
        x: {
          title: { display: true, text: "주행거리 (km)" },
          ticks: {
            callback: val => val.toLocaleString() + "km"
          }
        },
        y: {
          title: { display: true, text: "가격 (만원)" }
        }
      }
    }
  });

  // [4] 차량 수 표시
  document.getElementById('scatterTitle').innerHTML = `
    <h6 style="margin: 0; color: #333;">지금 DA에 준비된 차량은</h6><br>
    <strong style="font-size: 28px; color:rgb(0, 0, 0);">총 ${carList.length}대</strong>
  `;
}

// [5] 실거래 이력 확인 버튼
let isTradeVisible = false;

function showTradeHistory() {
  const container = document.getElementById('tradeHistory');

  if (isTradeVisible) {
    container.innerHTML = '';
    isTradeVisible = false;
  } else {
    container.innerHTML = '';
    carList
      .filter(car => car.model.includes("그랜저(IG)"))
      .forEach(car => {
        container.innerHTML += `
          <div style="margin-bottom: 10px;">
            <strong>${car.model}</strong><br>
            가격: ${car.price} | 주행거리: ${car.km} | 지역: ${car.location} | 차량번호: ${car.num}
          </div>
        `;
      });
    isTradeVisible = true;
  }
}

