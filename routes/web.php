<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\Auth\Socialite;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/game', [GameController::class, 'game']);
Route::get('/withdraw', [GameController::class, 'withdraw']);
Route::get('/playgame', [GameController::class, 'playgame']);
Route::get('/playgame/pinball', [GameController::class, 'playgame_pinball']);
Route::get('/playgame/tank_carnage', [GameController::class, 'playgame_tank_carnage']);
Route::any('/leaderboard', [GameController::class, 'leaderboard']);
Route::get('/closemodel', [GameController::class, 'closemodel']);
Route::post('/loginuser', [LoginController::class, 'loginuser']);






Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/logout', [LoginController::class, 'logout']);

Route::get('auth/google', [LoginController::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [LoginController::class, 'handleGoogleCallback']);

Route::get('auth/facebook', [LoginController::class, 'redirectToFacebook']);
Route::get('auth/facebook/callback', [LoginController::class, 'handleFacebookCallback']);
