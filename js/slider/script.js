$(function(){
    
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: true,
        slidesToShow:6,
        arrows: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:3,
                    arrows:false,
                    centerMode:true
                }

            },

            {
                breakpoint: 580,
                settings:{
                    centerMode:true,
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 380,
                settings:
                {
                    centerMode: true,
                    slidesToShow:1,
                }
            }
        ]

            
        
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows:false,
        infinite: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite: false,
                    centerMode:false,
                    slidesToShow:2,
                }
                
            },
            {
                breakpoint:505,
                settings:{
                    arrows: false,
                    dots: true,
                    centerMode: false,
                    infinite: false,
                    slidesToShow: 1,
                }

            }
        ]
    });

    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows:false,
        dots:true,
        infinite: false
    })
})