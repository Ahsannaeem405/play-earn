<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    
    'google' => [
        'client_id' => '903467824286-r7cpr27makcpdbfgr02drrab6ojiqu01.apps.googleusercontent.com',
        'client_secret' => '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',
        'redirect' => 'https://play2-earn.com/auth/google/callback',
    ],
    'facebook' => [
        'client_id' => '432952581897073',
        'client_secret' => 'b9d612d0dcea27d9a443652acc581af7',
        'redirect' => 'https://play2-earn.com/auth/facebook/callback',
      ], 
   
    

];

