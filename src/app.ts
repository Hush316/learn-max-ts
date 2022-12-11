console.log('hello ts');

const btn = document.getElementById('btn')!

function logHandler(message:string) {
  console.log('Clicked!!!  ' + message);
}
btn.addEventListener('click',logHandler.bind(null,'you\'re welcome!'))
