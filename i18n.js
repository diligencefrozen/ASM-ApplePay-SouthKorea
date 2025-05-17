const I18N = {
  ko: {
    searchPlaceholder:    "장소를 검색하세요.",
    patchNotesToggle:     "패치노트",
    noticeToggle:         "필독사항",
    noKeywordAlert:       "키워드를 입력해주세요.",
    zeroResultAlert:      "검색 결과가 없습니다.",
    errorAlert:           "검색 중 오류가 발생했습니다."
  },
  en: {
    searchPlaceholder:    "Search for a place…",
    patchNotesToggle:     "Release Notes",
    noticeToggle:         "Notice",
    noKeywordAlert:       "Please enter a keyword.",
    zeroResultAlert:      "No results found.",
    errorAlert:           "An error occurred while searching."
  }
};

function applyI18n() {
  // en-*, en 은 모두 영어로 처리
  // 쿼리 파라미터에 lang=en 이 있으면 강제 사용
  const params = new URLSearchParams(location.search);
  const forced = params.get('lang');
  const lang = navigator.language.toLowerCase().startsWith("en") ? "en" : "ko";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const txt = I18N[lang][key] || "";
    if ("placeholder" in el) {
      el.placeholder = txt;
    } else {
      el.textContent = txt;
    }
  });
  // 전역으로도 사용할 수 있게
  window._I18N = I18N[lang];
}
