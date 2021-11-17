// be sure to enable this on chrome
// chrome://flags/#allow-insecure-localhost
// then run this command "yarn run sass <filename.scss> output/style.css --watch"

const id = 'my-injected-style';
document.getElementById(id)?.remove();
const link = document.createElement('link');
link.id = id;
link.rel = 'stylesheet';
document.head.prepend(link);
setInterval(() => {
  link.href = `https://127.0.0.1:64666/output/style.css?time=${new Date().getTime()}`;
}, 3000);
