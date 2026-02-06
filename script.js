const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const timelineItems = document.querySelectorAll(".timeline-item");

if (timelineItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item) => observer.observe(item));
}

const projectCards = document.querySelectorAll(".project-card");

if (projectCards.length > 0) {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          projectObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 220}ms`;
    projectObserver.observe(card);
  });
}
