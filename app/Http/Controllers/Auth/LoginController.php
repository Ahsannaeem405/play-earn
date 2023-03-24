<?php

namespace App\Http\Controllers\Auth;


use Socialite;
use Auth;
use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Score;
use App\Models\History;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    


    public function logout()
    {
        Session::flush();
        Auth::logout();
        return redirect('login');

    }


    
    public function redirectToGoogle()
    {
        
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        
            try {
                $user = Socialite::driver('google')->stateless()->user();
                $finduser = User::where('email', $user->email)->first();
                if($finduser){
                    
                    if(\Cookie::has('dumyuser'))
                    {

                        $id = \Cookie::get('dumyuser');
                        $find = Score::where('user_id',$finduser->id)->first();
                        $finddumy = Score::where('user_id',$id)->first();

                        // dd($find->gameplay, $finddumy->gameplay);
                        if($find)
                        {
                            $find->score = $finddumy->score;
                            $find->highscore = $find->highscore + $finddumy->highscore;
                            $find->gameplay = $find->gameplay + $finddumy->gameplay;
                            $find->update();
                            Score::where('user_id', $id)->delete();

                        }
                        User::where('id', $id)->delete();

                        // History::where('user_id',$id)->update(['user_id'=> $finduser->id]);
                        $hist = History::where('user_id',$id)->get();
                        
                        foreach($hist as $history)
                        {
                            $history= History::find($history->id);
                            $history->user_id = $finduser->id;
                            $history->update();

                        }
                        \Cookie::queue(\Cookie::forget('dumyuser'));
                        \Cookie::queue(\Cookie::forget('UserId'));


                    }

                    Auth::login($finduser);
                    return redirect()->intended('/');
                }else{

                        if(\Cookie::has('dumyuser'))
                        {
                            $id = \Cookie::get("dumyuser");
                            // dd($user);
                            $usere = User::find($id);
                            if($usere != null)
                            {   
                                $usere->name = $user->name;
                                $usere->lastname = "";
                                $usere->email = $user->email;
                                $usere->google_id = $user->id;
                                $usere->password = \Hash::make('123456dummy');
                        
                                $usere->update();
                                Auth::login($usere);
                                \Cookie::queue(\Cookie::forget('dumyuser'));
                                \Cookie::queue(\Cookie::forget('UserId'));

                                return redirect()->intended('/');
                            
                            }

                        }
                        else{
                            $newUser = User::create([
                                'name' => $user->name,
                                'email' => $user->email,
                                'google_id'=> $user->id,
                                'password' => encrypt('123456dummy')
                            ]);
                            Auth::login($newUser);
                            return redirect()->intended('/');
                            
                        }
                }
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        
    }



    public function redirectToFacebook()
    {
        
        return Socialite::driver('facebook')->redirect();

    }
    public function handleFacebookCallback()
    {
        
        try {
            
            $user = Socialite::driver('facebook')->stateless()->user();
            $finduser = User::where('email', $user->email)->first();
            if($finduser){
                

                if(\Cookie::has('dumyuser'))
                {

                    $id = \Cookie::get('dumyuser');
                    // Score::where('user_id',$id)->update(['user_id'=> $finduser->id]);
                    $find = Score::where('user_id',$finduser->id)->first();
                    $finddumy = Score::where('user_id',$id)->first();

                    // dd($find->gameplay, $finddumy->gameplay);
                    if($find)
                    {

                        $find->score = $finddumy->score;
                        $find->highscore = $find->highscore + $finddumy->highscore;
                        $find->gameplay = $find->gameplay + $finddumy->gameplay;
                        $find->update();
                        Score::where('user_id', $id)->delete();


                    }


                    $hist = History::where('user_id',$id)->get();
                    foreach($hist as $history)
                    {
                        $history= History::find($history->id);
                        $history->user_id = $finduser->id;
                        $history->update();

                    }
                    User::where('id', $id)->delete();

                    \Cookie::queue(\Cookie::forget('dumyuser'));
                    \Cookie::queue(\Cookie::forget('UserId'));
                }

                Auth::login($finduser);
                return redirect()->intended('/');
            }else{
                
                if(\Cookie::has('dumyuser'))
                {
                    
                    $id = \Cookie::get("dumyuser");
                    // dd($user);
                    $usere = User::find($id);
                    if($usere != null)
                    {   
                        // dd('hhh');
                        // $da = User::find($id);
                        $usere->name = $user->name;
                        $usere->lastname = "";
                        $usere->email = $user->email;
                        $usere->google_id = $user->id;
                        $usere->password = \Hash::make('123456dummy');
                
                        $usere->update();
                        
                        Auth::login($usere);
                        \Cookie::queue(\Cookie::forget('dumyuser'));
                        \Cookie::queue(\Cookie::forget('UserId'));
                        
                        return redirect()->intended('/');
                    
                    }

                }
                else{
                    
                    $newUser = User::create([
                        'name' => $user->name,
                        'email' => $user->email,
                        'google_id'=> $user->id,
                        'password' => encrypt('123456dummy')
                    ]);
                    
                    
                }
                
                    Auth::login($newUser);
                    return redirect()->intended('/');


                
                
            }
        } catch (Exception $e) {
            
            dd($e->getMessage());
        }
    }







    public function loginuser(Request $req)
    {
        $req->validate([
            'email'    => 'required | exists:users',
            'password' => 'required',
           
        ]);
        $data = User::where('email',$req->email)->first();

        if( Hash::check($req->password, $data->password))
        {
            if(\Cookie::has("dumyuser"))
            {
                $id = \Cookie::get('dumyuser');
                $find = Score::where('user_id',$data->id)->first();
                $finddumy = Score::where('user_id',$id)->first();

                // dd($find->gameplay + $finddumy->gameplay);
                if($find)
                {

                    $find->score = $finddumy->score;
                    $find->highscore = $find->highscore + $finddumy->highscore;
                    $find->gameplay = $find->gameplay + $finddumy->gameplay;
                    $find->update();
                    Score::where('user_id', $id)->delete();


                }
                User::where('id', $id)->delete();
                Auth::login($data);
                
                \Cookie::queue(\Cookie::forget('dumyuser'));
                \Cookie::queue(\Cookie::forget('UserId'));

                $hist = History::where('user_id',$id)->get();
                foreach($hist as $history)
                {
                    $history= History::find($history->id);
                    $history->user_id = $data->id;
                    $history->update();

                }
                
                return redirect()->intended('/');

                
            }
            else{
                Auth::login($data);
                return redirect()->intended('/');
            }

        }
        else{
            return back()->with('error', ' Your password is incorrect!');
        }
    }
}
