const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  const content = item.querySelector('.accordion-content');

  button.addEventListener('click', () => {
    content.classList.toggle('active');
  });
});

