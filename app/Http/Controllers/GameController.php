<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Score;
use App\Models\User;
use Illuminate\Http\Request;

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


        $this->createDummyUser();


        return view('user.playgame');
    }

    public function playgame_pinball()
    {

        $this->createDummyUser();
        return view('user.playgame2');
    }

    public function playgame_tank_carnage()
    {

        $this->createDummyUser();
        return view('user.playgame3');
    }


    public function createDummyUser()
    {
        if (!Auth()->check()) {
            if (!\Cookie::has("dumyuser")) {
                $user = new User;
                $user->name = 'test';

                $user->lastname = 'user';
                $num = rand(11111, 99999);
                $user->email = $num . '@gmail.com';
                $user->password = \Hash::make('12345678');
                $user->save();
                // \Session::put('dumyuser', $user->id);
                \Cookie::queue(\Cookie::make('dumyuser', $user->id, 86400));

            }


        }
    }

    public function leaderboard(request $request)
    {

        if (!auth()->check()) {


//            }
            if (\Cookie::has("dumyuser")) {


                $id = \Cookie::get("dumyuser");
                // dd($id);


                $user = Score::where('user_id', $id)->where('game_id', $request->game_id)->orderBY('id', 'DESC')->first();
                $scor = round($request->highscore, 2);

                if ($user == Null) {
                    $score = new Score;
                    $score->user_id = $id;

                    $score->score = $scor;
                    $score->highscore = $scor;
                    $score->gameplay = 1;
                    $score->game_id = $request->game_id;

                    $score->save();
                    // return response()->json(['status' => 'sucess']);
                    $history = new History;
                    $history->user_id = $id;
                    $history->game_id = $request->game_id;
                    $history->score = $scor;
                    $history->save();

                    return response()->json(['status' => 'sucess']);

                } else {
                    // if(round($user->score) != round($scor))
                    if ($user->score != $scor  && $scor>$user->score) {
                        // dd($user, 1);
                        // dd('kkkk');

                        $user->score = $scor;
                        $user->user_id = $id;
                        $user->highscore = $user->highscore + $scor;
                        $user->gameplay = $user->gameplay + 1;

                        $user->update();

                        // dd($scor ,$user->score);

                        $history = new History;
                        $history->user_id = $id;
                        $history->game_id = $request->game_id;
                        $history->score = $scor;
                        $history->save();
                        return response()->json(['status' => 'sucess', 'score' => $user->score]);

                    }


                }


            }
        }
        else {

            $user = Score::where('user_id', auth()->user()->id)->where('game_id', $request->game_id)->orderBY('id', 'DESC')->first();
            $scor = round($request->highscore, 2);
            // dd($user,$user_id);


            if ($user == Null) {
                // dd($user);

                $score = new Score;
                $score->user_id = Auth()->user()->id;

                $score->score = $scor;
                $score->highscore = $scor;
                $score->gameplay = 1;
                $score->game_id = $request->game_id;

                $score->save();
                // return response()->json(['status' => 'sucess']);

                $history = new History;
                $history->user_id = Auth()->user()->id;
                $history->game_id = $request->game_id;
                $history->score = $scor;
                $history->save();


                auth()->user()->BalanceUpdate($scor,$request->game_id);


            } else {

                // if(round($user->score) != round($scor))
                if ($user->score != $scor && $scor>$user->score) {
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
                    $history->game_id = $request->game_id;
                    $history->score = $scor;
                    $history->save();
                    auth()->user()->BalanceUpdate($scor,$request->game_id);


                }

            }


        }


        // highscoreTop
        // return view('user.playgame');
    }

    public function closemodel()
    {


    }

}
