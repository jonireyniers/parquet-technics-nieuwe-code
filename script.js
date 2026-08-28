const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = encodeURIComponent('Offerteaanvraag Parquet Technics - ' + data.get('dienst'));
  const body = encodeURIComponent(
    `Naam: ${data.get('naam')}\n` +
    `Telefoon: ${data.get('telefoon')}\n` +
    `E-mail: ${data.get('email')}\n` +
    `Dienst: ${data.get('dienst')}\n\n` +
    `Vraag:\n${data.get('vraag')}`
  );

  document.getElementById('form-note').textContent = 'Uw e-mailprogramma wordt geopend.';
  window.location.href = `mailto:parquet.technics@hotmail.com?subject=${subject}&body=${body}`;
});
