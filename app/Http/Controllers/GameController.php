<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Score;
use App\Models\User;
use App\Models\History;

class GameController extends Controller
{
    //
    public function game()
    {

        return view('user.game');
    }
    public function withdraw()
    {

        return view('user.withdraw');
    }
    public function playgame()
    {
        // \Session::forget("dumyuser");
        // dd(\Session::get("dumyuser"));
        // \Session::flush();
        // \Cookie::forget('UserId');
        // \Cookie::queue(\Cookie::forget('dumyuser'));

        // \Cookie::queue(\Cookie::forget('UserId'));

        if(!Auth()->check())
        {
            if(\Cookie::has("dumyuser"))
            {
                // dd('ggg');

            }
            else{
                // dd('jjjjj');

            // \Session::put('UserId', 'token');

            \Cookie::queue(\Cookie::make('UserId', 'token', 86400));
            }

        }
        
        
        
        return view('user.playgame');
    }

    public function leaderboard(request $request)
    {

        if(!auth()->check())
        {


            if(\Cookie::has('UserId'))
            {

                // $ide = \Cookie::get("UserId");
                // \Cookie::queue(\Cookie::forget("UserId"));
                // dd('gg');

                 //   if($user->score != $scor)

                // \Session::forget('UserId');

                return response()->json(['status' => 'sucess']);
            }
            elseif(\Cookie::has("dumyuser"))
            {
                $id = \Cookie::get("dumyuser");
                // dd($id);




                $user = Score::where('user_id', $id)->orderBY('id','DESC')->first();
                $scor = round($request->highscore,2);

                if($user == Null)
                {
                    $score = new Score;
                    $score->user_id = $id;
        
                    $score->score = $scor;  
                    $score->highscore = $scor;
                    $score->gameplay = 1;
                    
                    $score->save();
                    // return response()->json(['status' => 'sucess']);
                    $history = new History;
                    $history->user_id = $id;
                    $history->game_id = '1';
                    $history->score = $scor;  
                    $history->save();
                }
                else{
                    // if(round($user->score) != round($scor))
                    if($user->score != $scor)
                    {
                        // dd($user, 1);
                        // dd('kkkk');
                        
                        $user->score = $scor;
                        $user->user_id =$id;
                        $user->highscore = $user->highscore + $scor;
                        $user->gameplay = $user->gameplay + 1;
                        
                        $user->update();

                        // dd($scor ,$user->score);

                        $history = new History;
                        $history->user_id = $id;
                        $history->game_id = '1';
                        $history->score = $scor;  
                        $history->save();
                        return response()->json(['status' => 'sucess','score' => $user->score]);
                        
                    }
                            
                }




            }
        }
    else{
        




        $user = Score::where('user_id', auth()->user()->id)->orderBY('id','DESC')->first();
        $scor = round($request->highscore,2);
        // dd($user,$user_id);

    

        if($user == Null)
        {
            // dd($user);

            $score = new Score;
            $score->user_id = Auth()->user()->id;

            $score->score = $scor;  
            $score->highscore = $scor;
            $score->gameplay = 1;
            $score->save();
            // return response()->json(['status' => 'sucess']);

            $history = new History;
            $history->user_id = Auth()->user()->id;
            $history->game_id = '1';
            $history->score = $scor;  
            $history->save();

            

        }
        else{

            // if(round($user->score) != round($scor))
            if($user->score != $scor)
            {
                // dd($user, 1);
                
                $user->user_id = Auth()->user()->id;
                // dd($user->highscore + $scor);

                $user->highscore = $user->highscore + $scor;
                $user->gameplay = $user->gameplay + 1;
                $user->score = $scor;


                $user->update();
                // dd($scor ,$user->score);
                // return response()->json(['status' => 'sucess','score' => $user->score]);

                $history = new History;
                $history->user_id = Auth()->user()->id;
                $history->game_id = '1';
                $history->score = $scor;  
                $history->save();
                
            }

        }



    }


        

            // highscoreTop
            // return view('user.playgame');
    }

    public function closemodel()
    {
        \Cookie::queue(\Cookie::forget('UserId'));

        // dd('llll');

        if(\Cookie::has('dumyuser'))
        {

        }
        else{
            $user = new User;
            $user->name  = 'test';
            
            $user->lastname  = 'user';
            $num = rand(11111,99999);
            $user->email = $num . '@gmail.com';
            $user->password = \Hash::make('12345678');
            $user->save();
            // \Session::put('dumyuser', $user->id);
            \Cookie::queue(\Cookie::make('dumyuser', $user->id, 86400));
        }

        // dd(\Session::get('dumyuser'));

    }
    
}
