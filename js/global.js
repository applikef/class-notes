function writeString(str) {
  document.write(str);
}

function getPageId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('pageId');
}

function showBanner() {
  writeString("<div><a href='javascript:history.back()'>" +
    "<img src='./../resources/icons/home128.png' class='menu-icon' alt='home' />" +
    "</a><hr/></div>");
}
