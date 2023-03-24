@extends('../layout.main')

@section('content')
    <section class="hero gg" style="height:270px;">
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
    
    
<section>
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
        <section class="normal-breadcrumb set-bg" data-setbg="">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="normal__breadcrumb__text">
                            <h2>Login</h2>
                            <p>Welcome to Play 2 Earn</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Normal Breadcrumb End -->
    
        <!-- Login Section Begin -->
        <section class="login spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login__form">
                            <h3>Login</h3>
                            <form method="POST" action="{{ url('loginuser') }}">
                                @csrf
    
                                <div class="input__item">
                                    
                                    <input placeholder="Email Address" id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                    <span class="icon_mail"></span>
                                    @error('email')
                                    <p style="color:red;important;" class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    
                                </div>
                               
                                <div class="input__item">
                                    
                                    <input id="password" type="password"  placeholder="Password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                    <span class="icon_lock"></span>
                                    @if(Session::has('error'))
    
                                    <p style="color:red;important;" class=" role="">
                                        <strong> {{Session::get('error')}}</strong>
                                    </p>
                                    @endif
    
                                    
                                
                                </div>
                                
    
                                <!-- <div class="row mb-3">
                                    <div class="col-md-6 offset-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
    
                                            <label class="form-check-label" for="remember">
                                                {{ __('Remember Me') }}
                                            </label>
                                        </div>
                                    </div>
                                </div> -->
    
                                <div class="row mb-0">
                                    <div class="col-md-8">
                                        <button type="submit" class="site-btn">
                                            {{ __('Login') }}gggg
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login__register">
                            <h3>Dont’t Have An Account?</h3>
                            <a href="{{ url('/register') }}" class="primary-btn">Register Now</a>
                        </div>
                    </div>
                </div>
                <div class="login__social">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6">
                            <div class="login__social__links">
                                <span>or</span>
                                <ul>
                                    <li><a href="{{ url('auth/facebook') }}" class="facebook"><i class="fa fa-facebook"></i> Sign in With
                                    Facebook</a></li>
                                    <li><a href="{{ url('auth/google') }}" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    <section class="hero gg" style="height:380px;">
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
    </section> 
    
@endsection
