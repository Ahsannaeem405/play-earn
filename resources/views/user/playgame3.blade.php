<?php
session_start();
$uurl_page=url('/game');
?>
    <!DOCTYPE html>
<html>
<head>

    <title>Mech Carnage - Crypto Gaming</title>

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <meta name="msapplication-tap-highlight" content="no"/>
    <link rel='shortcut icon' type='image/x-icon' href='{{asset('MechCarnage/favicon.ico')}}'/>

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
<a href="{{$uurl_page}}" id="dbDeleteN" style="position: absolute;
    z-index: 10000;background: #12a3e0;color: white;padding: 4px;margin-left: 10px;text-decoration: none;
	">Back</a>
<div class="container">
    <iframe class="responsive-iframe" src="{{asset('MechCarnage/index.html')}}"></iframe>
</div>


{{-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mech Carnage</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

<meta name="generator" content="Construct 3">
	<meta name="author" content="Arcade Protocol Studios">
	<meta name="description" content="Top-Down Arcade Shooter">
	<link rel="manifest" href="{{asset('appmanifest.json')}}">
	<link rel="apple-touch-icon" sizes="128x128" href="{{asset('icons/icon-128.png')}}">
	<link rel="apple-touch-icon" sizes="256x256" href="{{asset('icons/icon-256.png')}}">
	<link rel="icon" type="image/png" href="{{asset('icons/icon-256.png')}}">

<link rel="stylesheet" href="{{asset('style.css')}}">

</head>
<body>
	<a href="{{$uurl_page}}" id="dbDelete1" style="background: #12a3e0;color: white;padding: 4px;margin-left: 10px;text-decoration: none;
">Back</a>

<!-- <button onclick = "read()">Read </button>
<p id="score"></p> -->
<div id="fb-root"></div>

	<noscript>
		<div id="notSupportedWrap">
			<h2 id="notSupportedTitle">This content requires JavaScript</h2>
			<p class="notSupportedMessage">JavaScript appears to be disabled. Please enable it to view this content.</p>
		</div>
	</noscript>
	<script src="{{asset('scripts/supportcheck.js')}}"></script>
	<script src="{{asset('scripts/offlineclient.js')}}" type="module"></script>
	<script src="{{asset('scripts/main.js')}}" type="module"></script>
	<script src="{{asset('scripts/register-sw.js')}}" type="module"></script>
	<script src="{{asset('jquery-2.1.1.min.js')}}"></script>

	 --}}
<script src="{{asset('jquery-2.1.1.min.js')}}"></script>
<script type = "text/javascript">
    $('document').ready(function(){

        $('#dbDelete').click(function(){
            var req = indexedDB.deleteDatabase("c3-localstorage-389uarjriw03q");
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
    (function () {
        // all the code will be here
        // ...
        if (!window.indexedDB) {
            console.log(`Your browser doesn't support IndexedDB`);
            return;
        }else{
            console.log(`Your browser support IndexedDB`);
        }
        const request = indexedDB.open('c3-localstorage-389uarjriw03q', 2);
        request.onerror = (event) => {
            console.error(`Database error: ${event.target.errorCode}`);
        };

        request.onsuccess = (event) => {
            // add implementation here
            console.log(`success IndexedDB`);
        };

        // create the Contacts object store and indexes
        request.onupgradeneeded = (event) => {
            let db = event.target.result;

            // create the Contacts object store
            // with auto-increment id
            let store = db.createObjectStore('keyvaluepairs');
            // create an index on the email property
            //let index = store.createIndex('Best', 'Score');
        };

        function insertContact(db, contact) {
            // create a new transaction
            //const txn = db.transaction('keyvaluepairs', 'readwrite');

            // get the Contacts object store
            const store = txn.objectStore('keyvaluepairs','Best');
            //
            let query = store.put(contact,'Best');

            // handle success case
            query.onsuccess = function (event) {
                console.log(event);
            };

            // handle the error case
            query.onerror = function (event) {
                console.log(event.target.errorCode);
            }

            // close the database once the
            // transaction completes
            txn.oncomplete = function () {
                db.close();
            };
        }
        request.onsuccess = (event) => {
            const db = event.target.result;

            insertContact(db, 0);


        };

    })();

    //	window.location.href=window.location.href;

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
    var request = window.indexedDB.open("c3-localstorage-389uarjriw03q",2);
    console.log(request);
    console.log('request');
    //alert(request);

    request.onerror = function(event) {
        console.log("error: ");
    };

    request.onsuccess = function(event) {
        db = request;
        // var objectStore = db.createObjectStore("keyvaluepairs", {keyPath: "keyvaluepairs"});

        console.log("success: "+ db);
    };


    setInterval(function(){
        var transaction = db.transaction("keyvaluepairs");
        var objectStore = transaction.objectStore("keyvaluepairs");
        var request = objectStore.get("Best");
        console.log('reh' + request);
        //var request = objectStore.get("HighScore");
        request.onsuccess = function(event) {
            // Do something with the request.result!
            if(request.result) {

                console.log(request);
                var highscore =JSON.parse(request.result);
                //alert(highscore);
                console.log(highscore);
                jQuery.ajax({
                    url:'/leaderboard',
                    type:'get',
                    data:{
                        "highscore":highscore,
                        "game_id":3,
                    },
                    success:function(result){
                        //window.location.reload();
                    }
                });

            }
        };
        //var req = indexedDB.deleteDatabase("c3-localstorage-389uarjriw03q");


    }, 500);


</script>
<script type = "text/javascript">
    //	window.location.href=window.location.href;

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
    var request = window.indexedDB.open("c3-localstorage-389uarjriw03q",2);
    console.log(request);
    request.onerror = function(event) {
        console.log("error: ");
    };

    request.onsuccess = function(event) {
        db = request.result;
        db2= request.result;
        // var objectStore = db.createObjectStore("keyvaluepairs", {keyPath: "keyvaluepairs"});

        console.log("success: "+ db);
    };
    const employeeData = [
        { key: "GunmachSave", Value: "gopal" },
    ];
    request.onupgradeneeded = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("keyvaluepairs", {keyPath: "keyvaluepairs"});
        console.log('objectStore');
        for (var i in employeeData) {
            objectStore.add(employeeData[i]);
        }
    }



    function read() {

        var transaction = db.transaction("keyvaluepairs");
        var objectStore = transaction.objectStore("keyvaluepairs");
        var request = objectStore.get("Best");
        //var request = objectStore.get("GunmachSave");
        window.location.href=window.location.href;


        request.onsuccess = function(event) {
            // Do something with the request.result!
            if(request.result) {
                var score =JSON.parse(request.result);

                alert(score.data.BestTimeTotal);


            } else {
                alert("Kenny couldn't be found in your database!");
            }
        };
    }
    setInterval(function(){
        var transaction = db.transaction("keyvaluepairs");
        var objectStore = transaction.objectStore("keyvaluepairs");
        var request = objectStore.get("Best");
        //var request = objectStore.get("HighScore");
        request.onsuccess = function(event) {
            // Do something with the request.result!
            if(request.result) {

                var highscore =JSON.parse(request.result);
                //alert(highscore);
                console.log(highscore);

                //var highscore =score.data.BestTimeTotal;
// 			jQuery.ajax({
// 			url:'/leaderboard',
// 			type:'get',
// 			data:{
//                 "highscore":highscore,
//             },
// 			success:function(result){
//                 //window.location.reload();
// 			}
//         });
            }
        };


    }, 500);





</script>
</body>
</html>
