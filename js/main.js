//слайдер-горталка
var splide = new Splide('.splide', {
     //padding: '5rem',
    type  : 'fade',
    rewind: true
});

splide.mount();


document.getElementById('close').addEventListener('click', function(){    
    document.getElementById('books-wrapper').style.display='none';
})

var booksList = document.getElementsByClassName('open-modal');
console.log(booksList);
for(var i = 0; i < booksList.length; i++){
    var button = booksList[i]   
    button.addEventListener('click', function(){
       /*  document.querySelector('body').style.height='100vh';
        document.querySelector('body').style.overflow='hidden'; */
        document.getElementById('books-wrapper').style.display='flex';        
    })

}

