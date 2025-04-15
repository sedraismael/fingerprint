function toggleInfo(element) {
  const active = document.querySelector('.fingerprint.active');
  if (active && active !== element) {
    active.classList.remove('active');
  }
  element.classList.toggle('active');
}

document.querySelectorAll('.fingerprint').forEach(fp => {
  fp.addEventListener('click', function () {
    toggleInfo(this);
  });
});
