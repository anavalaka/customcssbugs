// be sure to enable this on chrome
// chrome://flags/#allow-insecure-localhost
// then run this command "yarn run sass <filename.scss> output/style.css --watch"

// as part of initial setup, you need to cd into localhost-certs/ folder
// then run this command "openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem"

const id = 'my-injected-style';
document.getElementById(id)?.remove();
const link = document.createElement('link');
link.id = id;
link.rel = 'stylesheet';
document.head.prepend(link);
setInterval(() => {
  link.href = `https://127.0.0.1:64666/output/style.css?time=${new Date().getTime()}`;
}, 3000);
