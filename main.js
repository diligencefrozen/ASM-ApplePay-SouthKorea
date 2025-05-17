document.addEventListener("DOMContentLoaded", () => {
  applyI18n();    // → UI 요소들에 번역 적용
  initMap();      // → 지도 초기화
  bindReportUI(); // → (필요하다면) 리포트/문의 버튼 등 바인딩
});


function searchPlaces() {
  const keyword = document.getElementById('search-input').value.trim();
  if (!keyword) {
    alert(window._I18N.noKeywordAlert);
    return false;
  }
  if (searchMarker) searchMarker.setMap(null);

  const places = new kakao.maps.services.Places();
  places.keywordSearch(keyword, (data, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const pos = new kakao.maps.LatLng(data[0].y, data[0].x);
      map.setCenter(pos);
      const marker = new kakao.maps.Marker({
        position: pos,
        image: createMarkerImage('…/marker.png')
      });
      marker.setMap(map);
    }
    else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert(window._I18N.zeroResultAlert);
    }
    else if (status === kakao.maps.services.Status.ERROR) {
      alert(window._I18N.errorAlert);
    }
  });
}
