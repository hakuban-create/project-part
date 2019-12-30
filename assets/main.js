/* * * * * * * elements * * * * * * */
$("#zipcode_section").hide();
$("#custom_email").hide();


/* * * * * * * Variables * * * * * * */
var type,name,distance,searchArea,zipCode;



/* * * * * * * Functions * * * * * * */

function initSearchVars(){
    distance=$("#distance").val();
    searchArea=$("#searcharea").val();
    zipCode=$("#zipcode").val();
    type=$("#type").val();
    name=$("#place_name").val();

}



/* * * * * * * Listeners * * * * * * */

$("#search-btn").on("click",function(){
    event.preventDefault();
    console.log("clicked");
    initSearchVars();
    performSearch("result_container",searchArea,zipCode,distance,type,name);

});

$("#searcharea").on("change",function(){
    if($("#searcharea").val()=="Zip Code"){
    $("#zipcode_section").show();
    }else{
        $("#zipcode_section").hide();
    }
});


$("#result_container").on("click",".direction_btn",function(){
    event.preventDefault();
    var indexOfRestaurant=$(this).parent().parent().parent().attr("id");
    console.log("clicked: "+indexOfRestaurant);
    displayDistance(indexOfRestaurant);

});


$("#result_container").on("click",".share_btn",function(){
    event.preventDefault();
    var indexOfRestaurant=$(this).parent().parent().parent().attr("id");
    console.log("clicked: "+indexOfRestaurant);
    autofillEmail(indexOfRestaurant);

});


$("#email_recievers").on("change",function(){
    if($("#email_recievers").val()=="Custom Email Address"){
        $("#custom_email").show();
        }else{
            $("#custom_email").hide();
        }
});

$("#email_send_btn").on("click",function(){
    
})



  