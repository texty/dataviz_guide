

d3.csv('data/books.csv').then(function(books){
    
    
    //слайдер-горталка    
    var splide = new Splide('.splide', {    
    type  : 'fade',
    rewind: true
    });

    splide.mount();


    d3.select('#close').on('click', function(){    
        d3.select('#books-wrapper').style('display','none');
    })

    d3.selectAll('.open-modal').on('click', function(){

        let id = d3.select(this).attr('data-value');
        let slide = books.filter(function(d){ 
            return d.id === id 
        });

        let group = books.filter(function(d){ 
            return d.group === slide[0].group && d.id != id 
        })
        
        while (splide.length > 0) {
            splide.remove(splide.length - 1);
        }        

        splide.add(slide[0].html);  
        
        group.forEach(function(el){
            splide.add(el.html);
        })

        d3.select('#books-wrapper').style('display','flex');

        
    })
    
    

});



