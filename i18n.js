
const i18n = {
  ko: { searchPlaceholder: "장소를 검색하세요.", reportBtn: "가맹점 제보" },
  en: { searchPlaceholder: "Search for a place…", reportBtn: "Report a store" }
};
var lang = (navigator.language||"ko").startsWith("en") ? "en" : "ko";
document.querySelectorAll("[data-i18n]").forEach(el => {
  var key = el.dataset.i18n;
  el.placeholder
    ? el.placeholder = i18n[lang][key]
    : el.textContent = i18n[lang][key];
});
