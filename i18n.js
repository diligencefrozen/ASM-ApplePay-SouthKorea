// ── i18n.js ──
const I18N = {
  ko: {
    searchPlaceholder: "장소를 검색하세요.",
    patchNotesToggle: "패치노트",
    NoticeToggle: "필독사항",
    noKeywordAlert: "키워드를 입력해주세요."
    

  },
  en: {
    searchPlaceholder: "Search for a place…",
    patchNotesToggle: "Release",
    NoticeToggle: "Notice",
    noKeywordAlert: "Please enter a keyword."

  }
};

function applyI18n() {
  const lang = navigator.language.startsWith("en") ? "en" : "ko";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const txt = I18N[lang][key] || "";
    
    if ("placeholder" in el) {
      el.placeholder = txt;
    } else {
      el.textContent = txt;
    }
  });
}

