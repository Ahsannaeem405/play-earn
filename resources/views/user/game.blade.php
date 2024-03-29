@extends('layout.main')
@section('content')
    <!-- Header End -->
    <!-- Hero Section Begin -->

    <section class="hero">
        <div class="row">
            <div class="col-md-2">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <div class="col-md-8">
                <div class="container ">
                    <div class="">
                        <div class="hero__slider owl-carousel ">
                            <div class="banner_bg">
                                <div class="hero__items set-bg" data-setbg="img/hero/background.jpg">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <h2>Welcome to Play And Earn</h2>
                                                <!-- <p>After 30 days of travel across the world...</p> -->
                                                <a href="{{ url('playgame') }}"><span>Play Now</span> <i
                                                        class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="game_bg">
                            <div class="banner_icon">
                                <i class="fa-sharp fa-solid fa-lock"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
    </section>
    <!-- Product Section Begin -->
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="row">
            <div class="col-md-2">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <div class="col-md-8">
                <div class="container ">
                    <div class=" {{ auth()->check() ? auth()->user()->balance>=$level::level_two ? '' : 'banner' : 'banner' }}">
                        <div class="hero__slider owl-carousel ">
                            <div class="banner_bg">
                                <div class="hero__items set-bg" data-setbg="img/hero/background.jpg">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <h2>Welcome to Play And Earn</h2>
                                                <!-- <p>After 30 days of travel across the world...</p> -->
                                                <a href="{{ url('playgame') }}"><span>Play Now</span> <i
                                                        class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="game_bg">
                            <div class="banner_icon">
                                <i class="fa-sharp fa-solid fa-lock"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
    </section>
    <!--  -->
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="row">
            <div class="col-md-2">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <div class="col-md-8">
                <div class="container ">
                    <div class="{{ auth()->check() ? auth()->user()->balance>=$level::leve_three ? '' : 'banner' : 'banner' }}">
                        <div class="hero__slider owl-carousel ">
                            <div class="banner_bg">
                                <div class="hero__items set-bg" data-setbg="img/hero/background.jpg">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <h2>Welcome to Play And Earn</h2>
                                                <!-- <p>After 30 days of travel across the world...</p> -->
                                                <a href="{{ url('playgame') }}"><span>Play Now</span> <i
                                                        class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="game_bg">
                            <div class="icon_parent">
                                <div class="banner_icon">
                                    <i class="fa-sharp fa-solid fa-lock"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
    </section>
    <!--  -->
    <section class="product spad">
        <div class="container">
        </div>
        </div>
        <section class="hero gg" style="height:420px;">
            <div class="container">
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                        crossorigin="anonymous"></script>
                <!-- In feed -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6285508418" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </section>
        </div>
        </div>
        </div>
        </div>
    </section>



@endsection
