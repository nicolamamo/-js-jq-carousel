
//intercettare click su next
//recupero img con classe activr
$(".next").click(function(){
    var img_corrente = $("img.active");
    console.log(img_corrente);
    //recupero pallino corrente
    var pallino_corrente = $(".fa-circle.active")

//tolgo classe active
img_corrente.removeClass("active")   ;


//recupero img successiva
var img_successiva = img_corrente.next("img");
console.log(img_successiva);

//recupero pallino successivo
var pallino_successivo = pallino_corrente.next('.fa-circle')



//verifico ci sia img successiva
if (img_successiva.lenght !=0) {
    img_successiva.addClass("active")
//metto lasse active a pallino succ.
pallino_successivo.addClass("active")
}
//altrimenti non  c è img successivo e riparto dall inizio
else {
    img_successiva=$('img:first-child');
    img_successiva.addClass("active");

    //non c è pallino successivo , riparto
    $("fa-circle:first-child").addClass('active')
}

})

//intercettare click su prev
$(".prev").click(function(){
    var img_corrente = $("img.active");
    console.log(img_corrente);

//tolgo classe active
img_corrente.removeClass("active")   ;
//recupero img precedente
var img_precedente = img_corrente.prev("img");
console.log(img_precedente);
//do la classe a img precedente
img_successiva.addClass('active')
//verifico ci sia img precedente
if (img_precedente.lenght !=0) {
    img_successiva.addClass("active")
}
//altrimenti non  c è img precedente e riparto dall' inizio
else {
img_precedente =  $('img:last-child');

img_precedente.addClass("active");
}

})
