function urlGoster(){
    var url = $('a').attr("href");
    $("p").html(url);
    $("button:first").attr("onclick","urlGoster2()");

}

function urlDegistir(){
    var url = $('a').attr("href", "www.google.com");

}
function urlGoster2(){
    console.log("onclick degisti");
}