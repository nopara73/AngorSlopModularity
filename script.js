const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const demoTabs = document.querySelectorAll("[data-demo-target]");
const demoPanels = document.querySelectorAll("[data-demo-panel]");

demoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.demoTarget;

    demoTabs.forEach((button) => {
      button.classList.toggle("is-active", button === tab);
    });

    demoPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.demoPanel === target);
    });
  });
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
  });
});
