document.addEventListener("DOMContentLoaded", () => {
  applyI18n();     
  initMap();      
  bindReportUI(); 
});

function bindReportUI() {
  const toggle = document.getElementById("reportToggle");
  const modal  = document.getElementById("reportModal");
  const form   = document.getElementById("reportForm");
  toggle.addEventListener("click", () => modal.style.display = "block");

  form.addEventListener("submit", () => {
    // 제출 직전에 현재 지도 중심 좌표를 hidden input에 채워넣음
    const center = map.getCenter();
    document.getElementById("lat").value = center.getLat();
    document.getElementById("lng").value = center.getLng();
    // (target="_blank" 이므로 새 탭에서 Google Form 제출 페이지로 이동)
  });
}
