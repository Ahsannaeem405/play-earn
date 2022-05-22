@extends('layout.main')

@section('content')
<section class="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="normal__breadcrumb__text">
                        <h2>Sign Up</h2>
                        <p>Welcome to Play And Earn</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Normal Breadcrumb End -->

    <!-- Signup Section Begin -->
    <section class="signup spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="login__form">
                        <h3>Sign Up</h3>
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="input__item">
                                <input placeholder="Email address"  id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                <span class="icon_mail"></span>
                            </div>
                            @error('email')
                                <p  style="color:red !important;" class="" role="alert">
                                    <strong>{{ $message }}</strong>
                                </p>
                            @enderror
                            <div class="input__item">
                                <input type="text" placeholder="Your Name" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                <span class="icon_profile"></span>
                            </div>
                            @error('name')
                                <p  style="color:red !important;" class="" role="alert">
                                    <strong>{{ $message }}</strong>
                                </p>
                            @enderror
                            <div class="input__item">
                                <input id="password" type="password" class="@error('password') is-invalid @enderror" placeholder="Password" name="password">
                                <span class="icon_lock"></span>
                            </div>
                            @error('password')
                                <p  style="color:red !important;" class="" role="alert">
                                    <strong>{{ $message }}</strong>
                                </p>
                            @enderror

                            <div class="input__item">
                                <input id="password-confirm" type="password" class="form-control" placeholder="Conform Password" name="password_confirmation" required>
                                <span class="icon_lock"></span>

                            </div>
                            <button type="submit" class="site-btn">Login Now</button>
                        </form>
                        <h5>Already have an account? <a href="{{ url('/login') }}">Log In!</a></h5>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="login__social__links">
                        <h3>Login With:</h3>
                        <ul>
                            <li><a href="{{ url('auth/facebook') }}" class="facebook"><i class="fa fa-facebook"></i> Sign in With Facebook</a>
                            </li>
                            <li><a href="{{ url('auth/google') }}" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Signup Section End -->
@endsection
