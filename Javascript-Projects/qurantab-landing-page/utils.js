export const clickLabelEvent = (item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      item.click();
    }
  });
};

export function observeElements(sectionElements) {
  const options = { threshold: 0.5 };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log("hello");
        console.log(entry);
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sectionElements.forEach((element) => {
    observer.observe(element);
  });
}
