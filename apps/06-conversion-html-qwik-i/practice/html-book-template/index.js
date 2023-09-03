const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('error', function handleError() {
    const defaultImage =
      './img/profile/qwik.webp';

    img.src = defaultImage;
    img.alt = 'default';
    console.error(`Image load error. Add default image`)
  });
});

document.getElementById("currentYear").innerHTML = String(new Date().getFullYear());

function openExternal(url) {
  window.open(url, '_blank');
}