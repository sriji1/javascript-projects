//tabs configuration
const tabsData = [
  {
    id: 1,
    title: "Tab 1",
    content: "This is a content for tab 1",
  },

  {
    id: 2,
    title: "Tab 2",
    content: "This is a content for tab 2",
  },
  {
    id: 3,
    title: "Tab 3",
    content: "This is a content for tab 3",
  },

  // we can add more tabs
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabsData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const contentContainer = document.querySelector("#tabContentContainer");

    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);
    });
  }

  const tabContent = document.createElement("div");
  tabContent.id = tab.id;
  tabContent.className = "tabContent";
  tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`

  renderTabs();
});
