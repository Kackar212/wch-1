document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('blur', ({ target }) => {
    const label = target.labels[0];
    label.classList.toggle('focus', !!target.value);
  });
});
