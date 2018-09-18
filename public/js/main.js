$(document).ready(function(){
    $('header').css({
        'height': '50px',
        'background': 'black',
        'width': '100%',
        'position': 'relative'
    }).append('<div class="Header"></div>')

    $('.Header').append(`
        <div class="Header__Logo-image">
            <img height="100%" width="50px" src="https://www.seoclerk.com/pics/574269-1iOtnc1513153721.jpg" alt="main-logo"/>
        </div>
        <div class="Header__Items">
            <div Header__Items-aboutUs>About Us</div>
            <div Header__Items-contactUs>Contact Us</div>
            <div Header__Items-plans>Plans</div>
        </div>
        `).css({
            'display': 'flex'
        })

    $('.Header__Items').css({
        'display': 'flex',
        'justify-content': 'space-around',
        'right': '0',
        'width': '50%',
        'height': '100%',
        'position': 'absolute',
        'align-items': 'center'
    })

    $('.Header__Items div').each(function(index, item){
        $(this).css('color', 'white');
    })
})