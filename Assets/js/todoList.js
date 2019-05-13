$("ul").on('click', 'li', function () {
   $(this).toggleClass("completed"); 
});

$("ul").on('click', 'span', function (event) {
    //use .parent() to retrieve the <li>
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });

    //stop Event Bubbling
    //remeber to declare "event" variable
    event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var task = $(this).val();
        $(this).val("");
        // Nhớ là khi đưa icon vào trong cái append thì phải chuyển dấu "" sang ''
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + task + "</li>"); 
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});