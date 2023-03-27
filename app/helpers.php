<?php

use App\Models\History;
use App\Models\User;
use App\Models\Score;



function gethistory()
{
    // $history = History::with('user')->get()->groupBy('user_id');
    $score = Score::orderBy('highscore', 'DESC')->limit(10)->get();
    return $score;
}


function gethistory2()
{
    // $history = History::with('user')->get()->groupBy('user_id');

    $score = Score::orderBy('id', 'DESC')->limit(10)->get();
    return $score;
}

function getscore()
{
    // $history = History::with('user')->get()->groupBy('user_id');
    if(auth()->check())
    {
        $scores =auth()->user();
        return $scores;

    }
}


