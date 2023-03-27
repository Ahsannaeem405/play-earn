<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',
    // ];

    protected $fillable = [
        'name',
        'email',
        'password',
        'google_id',
        'lastname'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function history()
    {
        return $this->hasMany(History::class);
    }

    public function BalanceUpdate($score, $game_id)
    {
        $balance = $this->balance += $score * $this->gamePrice($game_id);
        $this->update([
            $this->balance => $balance
        ]);
    }

    public function gamePrice($game_id)
    {
        $amount = 0;
        if ($game_id == 1)
            $amount = 0.1;
        else if ($game_id == 2)
            $amount = 0.2;
        else if ($game_id == 3)
            $amount = 0.2;

        return $amount;

    }
}
