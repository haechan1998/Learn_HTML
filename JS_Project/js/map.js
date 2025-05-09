const map = L.map('map').setView([37.5012743, 127.039585], 16); // 강남 코리아IT

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

const marker = L.marker([37.5012743, 127.039585]).addTo(map)
  .bindPopup('강남 코리아IT아카데미')
  .openPopup();

function searchAddress() {
  const address = document.getElementById('address').value;
  if (!address) return;

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        map.setView([lat, lon], 16);
        marker.setLatLng([lat, lon])
              .bindPopup(display_name)
              .openPopup();
      } else {
        alert('주소를 찾을 수 없습니다.');
      }
    });
}
