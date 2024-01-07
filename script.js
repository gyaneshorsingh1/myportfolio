

$(document).ready(function () {
    if (window.matchMedia('(max-width: 768px)').matches){
        $("#navbar").click(function () {
            // $("#page").toggle();
            $("#page").toggle(".page");
            
    
        });
    }
    

});
