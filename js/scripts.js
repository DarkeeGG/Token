'use strict'

const text = 'abcdef1234'


const textTab = ['a', 'b', 'c'];

console.log(text.length);

console.log(text[0]);

console.log(text.indexOf('f'));

const generateToken = (length = 8) => {
    
    const string = 'qwertyuioplkjhgfdsazxcvbnm1234567890-=][\';/.'
    
    const tabRandom = [];
    
    for(let i = 0; i <length; i++) {
        const char =(Math.random()* (string.length - 1)).toFixed(0);
        
        tabRandom.push(string[char]);
        
    }
    return tabRandom.join('')
    
}


const btn = document.querySelector('button');

btn.addEventListener('click', () => {

document.querySelector('div').innerText = generateToken(20)

});

