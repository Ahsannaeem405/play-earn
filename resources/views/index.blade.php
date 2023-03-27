@extends('layout.main')

@section('content')
    <!-- Header End -->
@php

$da =  gethistory();
$da2 =  gethistory2();

@endphp
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="row">
            <div class="col-md-2">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                     crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>

                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                     crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <div class="col-md-8">
                <div class="container">
                    <div class="hero__slider owl-carousel">
                        <div class="hero__items set-bg" data-setbg="img/hero/background.jpg">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="hero__text">
                                        <h2>Welcome to Play 2 Earn</h2>
                                        <!-- <p>After 30 days of travel across the world...</p> -->
                                        <a href="{{ url('playgame') }}"><span>Play Now</span> <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                         crossorigin="anonymous"></script>
                    <!-- In feed -->
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-7235363930426530"
                         data-ad-slot="6285508418"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                    <script>
                         (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>

                    <h2 style="color:white;border-bottom: 2px solid white;">Space War:</h2><hr>
                    <p style="color:white;">When the aliens from the far galaxy attacked Mars. The human race living on Mars defended their newly occupied planet.
                    Both have hi-tech starships and started to bombarded each other with laser weapons. You were on Mars special Ops at the moment.
                    Aliens were able to successfully destroy all of your companion ships, now its only you who's left.
                    Its your responsibility now to save your planet. Take a seat and start your mission and try to destroy all enemy ships. Good Luck.</p>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                         crossorigin="anonymous"></script>
                    <!-- In feed -->
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-7235363930426530"
                         data-ad-slot="6285508418"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                    <script>
                         (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>

            </div>
            <div class="col-md-2">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                     crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                     crossorigin="anonymous"></script>
                <!-- Sidebar ads -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-7235363930426530"
                     data-ad-slot="6477080102"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>

    </section>

 <!-- Product Section Begin -->

    <!-- Nav pills start-->

    <div class="container" style="margin-top: 8%;">

        <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#home">Leaderboard</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#menu1">Recent players</a>
            </li>
        </ul>
    </div>
    <!-- Nav pills end-->


<div class="tab-content">
    <section class="hero container tab-pane active" id="home">
        <div class="container">

            <div class="hero__slider owl-carousel">
                <table class="table tabl2" style="border: 2px solid white; color: white;">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Total Amount Earned</th>
                    <th scope="col">Last Score</th>
                    <th scope="col">Total Games Played</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                    $k = 1;
                    @endphp
                    @foreach($da as $list)

                    @if($list->userdetal->name != "test")

                    <tr>
                        <th scope="row">{{$k}}</th>
                        <td>{{$list->userdetal->name}}</td>
                        <td>${{$list->userdetal->balance}}</td>
                        <td>{{$list->score}}</td>
                        <td>{{$list->gameplay}}</td>
                    </tr>
                    @php
                    $k++;
                    @endphp
                    @endif


                    @endforeach
                </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="hero container tab-pane fade" id="menu1">
        <div class="container">
            <div class="hero__slider owl-carousel">
            <table class="table" style="border: 2px solid white; color: white;">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Total Amount Earned</th>
                    <th scope="col">Last Earned</th>
                    <th scope="col">Total Games Played</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                    $k1 = 1;
                    @endphp

                    @foreach($da2 as $list2)
                    @if($list2->userdetal->name != "test")
                    <tr>
                        <th scope="row">{{$k1}}</th>
                        <td>{{$list2->userdetal->name}}</td>
                        <td>${{$list2->userdetal->balance}}</td>
                        <td>{{$list2->score}}</td>
                        <td>{{$list2->gameplay}}</td>
                    </tr>
                    @php
                    $k1++;
                    @endphp

                    @endif



                @endforeach

                </tbody>
                </table>
            </div>
        </div>
    </section>
    <section class="hero gg" style="height:420px;">
        <div class="container">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7235363930426530"
                 crossorigin="anonymous"></script>
            <!-- In feed -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-7235363930426530"
                 data-ad-slot="6285508418"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
    </section>
    </div>


</div>
</div>
</div>
</div>
</section>
    <section class="hero gg">
        <div class="container" style="box-shadow: 0px 0px 6px 4px white; padding: 33px; border-radius: 10px; margin-bottom: 3rem;">
            <h3 style="color:white;">Is the Designer Facing Extinction?</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div class="container" style="box-shadow: 0px 0px 6px 4px white; padding: 33px; border-radius: 10px; margin-bottom: 3rem;">
            <h3 style="color:white;">Guide to WordPress Post Revisions</h3>
            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
            <div class="container" style="box-shadow: 0px 0px 6px 4px white; padding: 33px; border-radius: 10px; margin-bottom: 3rem;">
            <h3 style="color:white;">Teach Your Kids to Code Playground with Tynker</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        </div>
        <div class="container" style="box-shadow: 0px 0px 6px 4px white; padding: 33px; border-radius: 10px; margin-bottom: 3rem;">
            <h3 style="color:white;">Surface Studio vs iMac – Which Should You Pick?</h3>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

    </section>

    @endsection
