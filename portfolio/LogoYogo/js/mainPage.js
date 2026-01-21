function mainPage(){
  function loadSection(id, htmlFile, initFn) {
    fetch(htmlFile)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (initFn) initFn();
    });
  }

  loadSection("section1", "components/section1.html", section1);
  loadSection("section2", "components/section2.html", section2);
  loadSection("section3", "components/section3.html", section3);
  loadSection("section4", "components/section4.html", section4);
}