@extends('layout.main')

@section('content')
    <!-- Header End -->

    <!-- Hero Section Begin -->
        <!-- Product Section Begin -->
        @php

$getscore =  getscore();

@endphp


    <!-- Hero Section Begin -->
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
                </div>
                <div class="col-md-8">
                <div class="container">
                    <div class="">
                        <form>
                            <div class="row mt-4" style="justify-content: center;">                    
                                <div class="col-9">
                                    <label for="" style="color:white;"> Amout to Withdraw:</label>
                                <input value="" id="withamout" type="number" class="form-control" min="1" placeholder="Enter Amout to Withdraw" onkeyup="this.value=this.value.replace(/[^0-9]/g,'.');">
                                <p id="para" style="color: red;" class="d-none">kindly enter amount less then your earning</p>
                                <input id="earn" val2="@if($getscore){{$getscore->highscore}}@endif" value="@if($getscore){{$getscore->highscore}}@endif" type="hidden">
                                </div>
                            </div>
                            <div class="row" style="justify-content: center;">
                                
                                <div class="">
                                <button disabled="disabled" id="submitbtn" type="button" class="btn btn-success mt-4">Review</button>
                                </div>
                            </div>
                            <div class="row" style="justify-content: center;">
                            <div class="col-9 mt-4">
                                <p style="color:white;">* Note</p>
                                <p style="color:white;">You will recieve the email from the website to proceed with the withdraw. Please check spam folder if you don't see it in the box.</p>
                            </div>
                            </div>
                        </form>
                        
                    </div>
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
            </div>
                
    </section>     
    <!--  -->








        <section class="product spad">
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
   $(document).ready(function(){
    $("#withamout").keyup(function(){

        var val1 = parseInt($(this).val());

        var earn = parseInt($('#earn').val());

        if( val1 <= earn){
            // alert('ddd');
            $("#submitbtn").prop('disabled', false);
            $("#para").addClass('d-none');

        }else{
            // alert('gggggggg');
            $("#submitbtn").prop('disabled', true);
            $("#para").removeClass('d-none');
            


        }

        // $("input").css("background-color", "pink");

        });
        $("#submitbtn").click(function(){

            Swal.fire(
            'Warning!',
            'You have not reach the limit to withdraw your earning! Kindly play more games to withdraw your earnings',
            'error'
            )
        });
   });
</script>

    @endsection

    