<?php
session_start();
$uurl_page=url('/game');
?>
    <!DOCTYPE html>
<html>
<head>

    <title>PINBALL SPACE ADVENTURE</title>

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <meta name="msapplication-tap-highlight" content="no"/>
    <link rel='shortcut icon' type='image/x-icon' href='{{asset('SpacePinball/favicon.ico')}}'/>

    <style>
        body{
            background-color: black;
        }

        .container {
            position: fixed;
            width: 100%;
            height: 100%;
            overflow: hidden;
            top: 0;
            left: 0;
        }

        .responsive-iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>

<body>
<a href="{{$uurl_page}}" id="dbDelete" style="position: absolute;
    z-index: 10000;background: #12a3e0;color: white;padding: 4px;margin-left: 10px;text-decoration: none;
	">Back</a>
<div class="container">
    <iframe class="responsive-iframe" src="{{asset('SpacePinball/index.html')}}"></iframe>
</div>
<script src="{{asset('jquery-2.1.1.min.js')}}"></script>

<script>
    function createItem() {
        localStorage.mytime = Date.now();
    }
    setInterval(function(){
        var score = localStorage.getItem("pinball");
        var gameScore =JSON.parse(score);
        var highscore=gameScore.totalscore;
        //  alert(highscore);
        var game='pinball';
        // alert(score.totalscore);
        if(highscore >0)
        {
            jQuery.ajax({
                url:'/leaderboard',
                type:'get',
                data:{
                    "highscore":highscore,
                    "game_id":2,

                },
                success:function(result){
                    //window.location.reload();
                }
            });
        }

    }, 1000);

</script>

</body>
</html>
