$(document).ready(function (){
    $(".menu").click(function (){
        $(this).next(".secondMenu").slideToggle();
    })
    $('.secondLi').click(function (){
        const content = $(this).attr('id')+'-content'
        $('#'+content).addClass('show').siblings().removeClass('show').addClass('hide')
    })
})
