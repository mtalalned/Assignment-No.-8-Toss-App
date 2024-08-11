

var img = document.querySelector('img')
var masjid = document.querySelector ('#masjid')
var chand = document.querySelector ('#chand')
var h1 = document.querySelector ('h1')

function tossCoin (coin) {
    
    var randomNumber = Math.floor(Math.random()*2)
    
    if (randomNumber === 0 && coin === 'masjid') {
        img.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
        h1.innerHTML = 'You won the toss'
    }else if (randomNumber === 0 && coin === 'chand') {
        img.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
        h1.innerHTML = 'You loss the toss'
    }else if (randomNumber === 1 && coin === 'chand') {
        img.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
        h1.innerHTML = 'You won the toss'
    }else if (randomNumber === 1 && coin === 'masjid') {
        img.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
        h1.innerHTML = 'You loss the toss'
    }
}