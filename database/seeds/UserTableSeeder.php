<?php

use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * @throws BindingResolutionException
     */
    public function run()
    {
        $this->user = app()->make(\App\Models\User::class);
        if ($this->user->all()->count() == 0) {
            $this->user->create(
                [
                    'name' => 'Usuário Master',
                    'email' => 'teste@builderall.com.br',
                    'password' => Hash::make('123456')
                ]
            );
        }
    }
}
