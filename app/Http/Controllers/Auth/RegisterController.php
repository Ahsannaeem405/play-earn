<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use App\Models\History;

use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        if(\Cookie::has("dumyuser"))
        {

            $id = \Cookie::get("dumyuser");
            $user = User::where('id', $id)->first();
            if($user != null)
            {
                // dd('hhh');
                $da = User::find($id);
                $da->name = $data['name'];
                $da->lastname = $data['lastname'];
                $da->email = $data['email'];
                $da->password = Hash::make($data['password']);
        
                $da->save();
                \Cookie::queue(\Cookie::forget('dumyuser'));
                // History::where('user_id',$id)->update(['user_id'=> $user->id]);

                // $history = new History;
                // $history->user_id = Auth()->user()->id;
                // $history->game_id = '1';
                // $history->score = $scor;  
                // $history->save();
                // return redirect('/');
               
            }
            
            
        }
        else{

            $da = user::create([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            
       
            // return $da;

        }
        return $da;
        

        
    }
}
