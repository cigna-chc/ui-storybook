const i18nUtils = {
  getMessage(key) {
    if (window.Granite && window.Granite.I18n) {
      // if Key is not found in i18n object then return same key
      // to avoid empty string issue
      return window.Granite.I18n.get(key) || key;
    } 
    // i18n object not found on windows
    // return same key to avoid empty string issue
    return key;
  },
};

export default i18nUtils;
