function loadPage(id, htmlFile, initFn) {
  var content = document.getElementById("content");

  content.innerHTML = "";

  fetch(htmlFile)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (initFn) initFn();
      window.scrollTo(0, 0);
    });
}

loadPage("navi", "components/navi.html", navi);
loadPage("content", "components/mainPage.html", mainPage);