// ── i18n.js ──
const I18N = {
  ko: {
    searchPlaceholder: "장소를 검색하세요.",
    reportBtn: "가맹점 제보",
    storeNamePlaceholder: "가맹점명",
    categoryLabel: "카테고리",
    submitBtn: "제출"
  },
  en: {
    searchPlaceholder: "Search for a place…",
    reportBtn: "Report a store",
    storeNamePlaceholder: "Store Name",
    categoryLabel: "Category",
    submitBtn: "Submit"
  }
};

function applyI18n() {
  // 언어 결정 (브라우저 기본 언어가 en 으로 시작하면 en, 아니면 ko)
  const lang = navigator.language.startsWith("en") ? "en" : "ko";
  // data-i18n 속성으로 바꿀 키 지정
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const txt = I18N[lang][key];
    if (el.tagName === "INPUT") {
      el.placeholder = txt;
    } else {
      el.textContent = txt;
    }
  });
}
