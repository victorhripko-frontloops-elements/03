import './style.scss';

(() => {
  const checkboxes = document.querySelectorAll('.checkbox__item');

  checkboxes.forEach((item) => {
    item.addEventListener('change', (evt) => {
      const otherCheckboxes = [...checkboxes].filter((el) => el !== item);

      otherCheckboxes.forEach((arrEl) => {
        arrEl.checked = Math.random() > .6;
      });
    });
  });
})();
