import './style.scss';

(() => {

  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((item) => {
    const checkboxItem = item.querySelector('.checkbox__item');

    checkboxItem.addEventListener('change', (evt) => {
      const otherCheckboxes = [...checkboxes].filter((el) => el.querySelector('.checkbox__item') !== checkboxItem);

      otherCheckboxes.forEach((arrEl) => {
        const item = arrEl.querySelector('.checkbox__item');

        item.checked = Math.random() > .5;
      });
    });
  });

})();
