<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('auth.login');
})->name('login');

Auth::routes();

Route::group(
    [
        'middleware'    => 'auth',
        'namespace'     => 'Panel'
    ],
    function() {
        App::setLocale('br');
        Route::get(__('definitions.routes.panel'), 'PanelController@index')->name('panel');

        Route::get('customers/search', 'CustomersController@search')->name('customers.search');
        Route::resource(__('definitions.routes.customers'), 'CustomersController')->names('customers');

        Route::post('city/search', 'CityController@search')->name('cities.search');

        Route::get(__('definitions.routes.profile'), 'ProfileController@index')->name('profile');
        Route::put('profile/{user}', 'ProfileController@update')->name('profile.update');
    }

);

Route::group(
    [
        'namespace'    => 'Auth',
    ],
    function() {
        Route::post('logout', 'LoginController@logout')->name('logout');
    }
);
