$(document).ready(function() {


    $('select').select();
    $('.modal').modal();
    var elem = document.querySelector('.modal');
    var instance = M.Modal.getInstance(elem);

    $("#add-btn").on("click", function() {
        // $('.modal').modal();
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [parseInt($("#q1").val()), parseInt($("#q2").val()), parseInt($("#q3").val()), parseInt($("#q4").val()), parseInt($("#q5").val()), parseInt($("#q6").val()), parseInt($("#q7").val()), parseInt($("#q8").val()), parseInt($("#q9").val()), parseInt($("#q10").val()) ]
        };
        console.log(newFriend);
        $.post("/api/new", newFriend)
            .done(function(data) {
                if(!data){
                   $("#matchInfo").append("<h3>Oh no, you have no match!</h3>"); 
                }
                $("#matchInfo").append("<img src='"+data.photo+"' class='responsive-img'>");
                $("#matchInfo").append("<h3>"+data.name+"</h3>");
                $("#myInfo").append("<img src='"+newFriend.photo+"' class='responsive-img'>");
                $("#myInfo").append("<h3>"+newFriend.name+"</h3>");
            });
        instance.open();
        // console.log(data);
    });


  });