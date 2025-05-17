document.addEventListener("DOMContentLoaded", ()=>{
  const lang = navigator.language.startsWith("en") ? "en" : "ko";
  applyI18n();  // (기존)
  initMap();
  bindReportUI();
  
  // 검색 이벤트 바인딩
  document.getElementById('search-submit')
          .addEventListener('click', searchPlaces);
  …
  
  function searchPlaces() {
    const keyword = document.getElementById('search-input').value.trim();
    if (!keyword) {
      // 하드코딩 대신 I18N 맵 참조
      alert(I18N[lang].noKeywordAlert);
      return false;
    }
    …
  }
});

