<?php
session_start();
$uurl_page=url('/game');
?>
<!DOCTYPE html>
<html>
<head>
<title>Play2 earn</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
<meta name="msapplication-tap-highlight" content="no"/>
<link rel='shortcut icon' type='image/x-icon' href='{{asset('GalacticThreat/favicon.ico')}}'/>
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
.button-36 {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-37 {
  background-color:orange;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}


</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
<body>
    <button id="exampleModalbtn" type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">

</button>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content" style="box-shadow: 1px 1px 11px 1px orange;">
      <div class="">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" id="close">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="text-align: center; padding: 66px;">

          <p style="font-size: 27px;">Click here to withdraw your earning</p>
        <a href="{{route('register')}}" class="button-36 py-3 px-6" role="button">Register</a>
        <button href="" id="btan2" class="button-37 py-3 px-6">Play game</button>
      </div>

    </div>
  </div>
</div>









    <a href="{{ url('/') }}" id="dbDeleten" style="position: absolute;
    z-index: 10000;background: #12A3E0;color: white;padding: 4px;margin-left: 10px;text-decoration: none;
    ">Back</a>
    <button class="btnfull btn btn-primary"  style="position: absolute;
    z-index: 10000;background: #12A3E0;color: white;padding: 4px;margin-left: 60px;text-decoration: none;
    " onclick="openFullscreen()">Full Screen</button>
<div class="container111" id="fullscreen">
<iframe class="responsive-iframe" src="{{asset('GalacticThreat/index.html')}}">
</iframe>
</div>
    <!-- <script src="{{asset('jquery-2.1.1.min.js')}}"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script type = "text/javascript">
            $('document').ready(function(){
    $('#dbDelete').click(function(){
    var req = indexedDB.deleteDatabase("c3-localstorage-1hak07i2nl58y");
            console.log("Deleted database successfully");
            window.location.href=window.location.href;
        request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("keyvaluepairs");
         }
            req.onsuccess = function () {
                console.log("Deleted database successfully");
            };
            req.onerror = function () {
                console.log("Couldn't delete database");
            };
            req.onblocked = function () {
                console.log("Couldn't delete database due to the operation being blocked");
            };
         });
    });
    </script>
                    <script type = "text/javascript">
        //prefixes of implementation that we want to test
        window.indexedDB = window.indexedDB || window.mozIndexedDB ||
        window.webkitIndexedDB || window.msIndexedDB;
        //prefixes of window.IDB objects
        window.IDBTransaction = window.IDBTransaction ||
        window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
        window.msIDBKeyRange
        if (!window.indexedDB) {
           window.alert("Your browser doesn't support a stable version of IndexedDB.")
        }
        var db,db2;
        var request = window.indexedDB.open("c3-localstorage-1hak07i2nl58y",2);
        request.onerror = function(event) {
           console.log("error: ");
        };
        request.onsuccess = function(event) {
           db = request.result;
           db2= request.result;
           console.log("success: "+ db);
        };
        const employeeData = [
            { key: "HighScore", Value: "gopal" },
         ];
        request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("keyvaluepairs");
         }
        function read() {
          var transaction = db.transaction("keyvaluepairs");
           var objectStore = transaction.objectStore("keyvaluepairs");
            var request = objectStore.get("LastScore");
           request.onsuccess = function(event) {
              // Do something with the request.result!
              if(request.result) {
                var score =JSON.parse(request.result);
              } else {
                 alert("Kenny couldn't be found in your database!");
              }
           };
        }
        setInterval(function(){
              var transaction = db.transaction("keyvaluepairs");
           var objectStore = transaction.objectStore("keyvaluepairs");
            var request = objectStore.get("LastScore");
            var top = objectStore.get("HighScore");
            var highscoreTop = 0;
            top.onsuccess = function(event) {
                if(top.result) {
                     highscoreTop =JSON.parse(top.result);
                    localStorage.setItem('highscoreTop',highscoreTop);
            // alert(highscoreTop)
            }
              }
            request.onsuccess = function(event) {
              // Do something with the request.result!
              if(request.result) {
                var highscore =JSON.parse(request.result);
            var highscoreTop=localStorage.getItem('highscoreTop');
                  if(highscore > 0)
                     {


                        $.ajax({
                        url:"{{ url('/leaderboard') }}",
                        type:'post',
                        async:true,
                        data:{
                            "highscore":highscore,
                            "highscoreTop":highscoreTop,
                            "game_id":1,
                        },
                        success:function(result){
                            // alert();
                            if(result.status == 'sucess')
                            {

                                if($('#exampleModal').hasClass('show'))
                                {

                                }
                                else{
                                  $("#exampleModalbtn").click();

                                }
                                console.log(result.score);

                            }
                            //window.location.reload();
                        }
                    });
        }
    }
           }
    }, 2000);

    $("#close").click(function(){
      //
      $.ajax({
                        url:"{{ url('/closemodel') }}",
                        type:'get',

                        success:function(result){
                            // alert();

                            //window.location.reload();
                        }
                    });

});

$("#btan2").click(function(){

    $("#close").click();

});

     </script>
    <script>



        var elem = document.getElementById("fullscreen");
        function openFullscreen() {
            elem.requestFullscreen();
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }
    </script>

</body>
</html>




