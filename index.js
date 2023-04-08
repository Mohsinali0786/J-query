// $(document).ready(function(){
//     alert('J Query running')
// })

// $("button").click(function(){
//     $("p").hide()
// })
// $("button").click(function(){
//     // $("#hello1").hide()
//     $("#hello1").toggle()
//     $(".hello2").slideToggle()

// })



// $("button").click(function(){
//     // $("#hello1").hide()
//     $("#hello1").css("color","red")
//     $("h4").addClass("heading-color")
//     $("p").removeClass("hello2")
//     $(".div1 p").addClass('heading-color')
// })

$('#submit-btn button').click(function(){
    event.preventDefault()
    let fName=$("#fname").val()
    if(fName){
        $("#fname").removeClass("invalid").addClass("valid")
    }
    else{
        $("#fname").removeClass("valid").addClass("invalid")

    }
})