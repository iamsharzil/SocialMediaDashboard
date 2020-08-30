window.onload = function () {
  const bodyElement = document.body;
  const headings = document.querySelectorAll('.heading');
  const cards = document.querySelectorAll('.card');
  const topBg = document.querySelector('.top__bg');
  const attribution = document.querySelector('.attribution');

  document
    .getElementById('toggle__theme-btn')
    .addEventListener('click', toggleThemeFn);

  function toggleThemeFn() {
    bodyElement.classList.toggle('dark__mode');
    topBg.classList.toggle('top__bg-dark');
    attribution.classList.toggle('attribution-dark');

    headings.forEach((heading) => {
      heading.classList.toggle('heading-dark');
    });

    cards.forEach((card) => {
      card.querySelector('.card__title').classList.toggle('card__title-dark');
      card.classList.toggle('card-dark');
    });
  }
};
