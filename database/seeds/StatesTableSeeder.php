<?php

use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->state = app()->make(\App\Models\State::class);
        if ($this->state->all()->count() == 0) {
            $this->state->create(
                [
                    "name"      => "Acre",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Alagoas",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Amazonas",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Amapá",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Bahia",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Ceará",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Distrito Federal",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Espírito Santo",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Goiás",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Maranhão",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Minas Gerais",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Mato Grosso do Sul",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Mato Grosso",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Pará",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Paraiba",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Pernambuco",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Piauí",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Paraná",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Rio de Janeiro",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Rio Grande do Norte",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Rondônia",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Roraima",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Rio Grande do Sul",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Santa Catarina",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Sergipe",
                ]
            );
            $this->state->create(
                [
                    "name"      => "São Paulo",
                ]
            );
            $this->state->create(
                [
                    "name"      => "Tocantins",
                ]
            );
        }
    }
}
