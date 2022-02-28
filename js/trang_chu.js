/*************** go to top ****************************/
$(document).ready(function(){
    $("#gototop").hide()
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 100)
            $("#gototop").show("slow")
        else 
        $("#gototop").hide("slow")
        
    })
    
    $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
})

/************* đặt hàng ***************/
$(document).ready(function(){
    $("#dathang").hide()
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 100)
            $("#dathang").show("slow")
        else 
        $("#dathang").hide("slow")
        
    })
    
})
