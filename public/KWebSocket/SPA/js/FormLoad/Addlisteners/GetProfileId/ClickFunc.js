let StartFunc = () => {
  let temp = document.getElementById("templateAlterName");
  let clon = temp.content.cloneNode(true);
  let replace = document.getElementById("SectionId");
  document.getElementById("pageId").replaceChild(clon, replace);
  document.getElementById("headId").style.display = "none";
  replace.style.display = "none";
  document.getElementById("breadCrumpId").style.display = "none";
};

export { StartFunc };
