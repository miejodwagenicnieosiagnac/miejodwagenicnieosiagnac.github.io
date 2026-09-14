(() => {
  const viewer = document.querySelector(".viewer");
  const prev = document.querySelector(".nav.prev");
  const next = document.querySelector(".nav.next");
  if (!viewer) return;

  const go = (el) => {
    if (!el || el.classList.contains("hidden")) return;
    const href = el.getAttribute("href");
    if (href) window.location.href = href;
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(prev);
    if (e.key === "ArrowRight") go(next);
  });

  let touchX = null;
  viewer.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].clientX;
  }, {passive:true});

  viewer.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 45) return;
    if (dx > 0) go(prev);
    if (dx < 0) go(next);
  }, {passive:true});
})();
