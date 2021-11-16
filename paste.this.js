const id = 'my-injected-style';

setInterval(() => {
  document.getElementById(id)?.remove();
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://any.thing/output/style.css?time=${new Date().getTime()}`;
  document.head.prepend(link);
}, 1000);
