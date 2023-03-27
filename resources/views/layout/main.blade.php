<!DOCTYPE html>
<html lang="en">



<head>
    <meta charset="UTF-8">
    <meta name="description" content="Anime Template">
    <meta name="keywords" content="Anime, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Play To Earn</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
    <!-- fontawsome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <!-- Css Styles -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/elegant-icons.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/plyr.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/nice-select.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/slicknav.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Header Section Begin -->
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <a href="{{('/')}}">
                            <img src="{{asset('img/hero/Logo.png')}}" alt="" style="width: 114px;">
                        </a>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="header__nav">
                        <nav class="header__menu mobile-menu">
                            <ul>
                                <li class=""><a href="{{url('/')}}">Home</a></li>
                                <li><a href="{{url('game')}}">Game</a></li>

                                @auth

                                <li><a href="{{url('withdraw')}}">withdraw</a></li>
                                <li><a id="dbDeleteth" href="{{url('logout')}}">Logout <span class="fa fa-sign-out"></span></a></li>
                                @else
                                <li><a href="{{url('login')}}">Login</a></li>
                                <li><a href="{{url('register')}}">Register</a></li>
                                @endauth
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="header__right">
                    @auth

                        <a href="#" class="">Earned: <span style="color:green;">${{auth()->user()->balance}}</span></a>

                        @endauth
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>

    <div class="container-fluid">
        @yield('content')
    </div>



    <footer class="footer">
    <div class="page-up">
        <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <div class="footer__logo">
                    <a href="{{url('/')}}"><img src="{{asset('img/hero/Logo.png')}}" alt="" style="width: 114px;"></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="footer__nav">
                    <ul>
                        <li class="active"><a href="{{url('/')}}">Home</a></li>
                        @auth
                        <li><a href="{{url('game')}}">Game</a></li>
                        <li><a href="{{url('withdraw')}}">withdraw</a></li>
                        @else
                        <li><a href="{{url('login')}}">Login</a></li>
                        <li><a href="{{url('register')}}">Register</a></li>
                        @endauth
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>

              </div>
          </div>
      </div>
  </footer>
  <!-- Footer Section End -->

  <!-- Search model Begin -->
  <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-switch"><i class="icon_close"></i></div>
        <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here.....">
        </form>
    </div>
</div>
<!-- Search model end -->

<!-- Js Plugins -->
<script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/player.js') }}"></script>
<script src="{{ asset('js/jquery.nice-select.min.js') }}"></script>
<script src="{{ asset('js/mixitup.min.js') }}"></script>
<script src="{{ asset('js/jquery.slicknav.js') }}"></script>
<script src="{{ asset('js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
     crossorigin="anonymous"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T18G5HESPV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T18G5HESPV');
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
     crossorigin="anonymous"></script>


<script type = "text/javascript">
            $('document').ready(function(){
    $('#dbDeleteth').click(function(){
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
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
     crossorigin="anonymous"></script>

</body>

</html>
