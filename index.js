// Write your code here!
document.getElementById('main').remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'Someone is the champion';
document.body.appendChild(newHeader);