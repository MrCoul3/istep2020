document.addEventListener("DOMContentLoaded", function(){
    $("#submit").click(function(e){
        e.preventDefault();
        if ($(".password").val() !== $(".password-confirm").val()) {
            $(".password-confirm-label").html("пароли должны совпадать")
        }
        $(".password-confirm").focus(function(){
            $(".password-confirm-label").html("Подтвердите пароль")
        });
        let data = {};
        
        data.name = $(".name").val();
        data.staff = $(".position").val();
        data.age = $(".age").val();
        data.pass1 = $(".password").val();
        data.pass2 = $(".password-confirm").val();
        data.token = "sometoken";

        console.log(data)

        $.ajax({
            url: 'http://194.58.122.219/test/jq.php',
            data: data,
            beforeSend: function() {
                alert("Вы уверены?")
            },
            error: function(error) {
                console.log(error);
                console.log(error.responseJSON.length);
                for (let i = 0; i < error.responseJSON.length; i++) {
                alert(error.responseJSON[i])
                console.log(error.responseJSON[i])
                }
            },
            success: function(res){
                alert("Вы успешно ввели данные")
                console.log(res);
            }
          });

    });
    
    


});

'name',
    'staff',
    'age',
    'pass1',
    'pass2',
'token'