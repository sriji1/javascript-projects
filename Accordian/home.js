const sections = [
  {
    title: "Section 1",
    content: "Content for section 1",
  },
  {
    title: "Section 2",
    content: "Content for section 2",
  },
  {
    title: "Section 3",
    content: "Content for section 3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const accordianContainer = document.querySelector("#accordian");
  sections.forEach((section) => {
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("accordian-item");
    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordian-header");
    sectionHeader.taxtContent = section.title;
    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordian-header");
    sectionHeader.taxtContent = section.title;
  });
});
