<?php

use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{

    /**
     *
     */
    public function run()
    {
        $this->city = app()->make(\App\Models\City::class);
        if ($this->city->all()->count() == 0) {
            $this->city->create([
                "state_id"=> 21,
                "name"=> "Alta Floresta D'oeste"
            ]);
            $this->city->create([
                "state_id"=> 21,
                "name"=> "Ariquemes"
            ]);
            $this->city->create([
                "state_id"=> 21,
                "name"=> "Cabixi"
            ]);
            $this->city->create([
                "state_id"=> 21,
                "name"=> "Cacoal"
            ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Cerejeiras"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Colorado do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Corumbiara"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Costa Marques"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Espigão D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Guajará-Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Jaru"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Ji-Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Machadinho D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Nova Brasilândia D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Ouro Preto do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Pimenta Bueno"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Porto Velho"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Presidente Médici"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Rio Crespo"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Rolim de Moura"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Santa Luzia D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Vilhena"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "São Miguel do Guaporé"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Nova Mamoré"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Alvorada D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Alto Alegre dos Parecis"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Alto Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Buritis"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Novo Horizonte do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Cacaulândia"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Campo Novo de Rondônia"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Candeias do Jamari"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Castanheiras"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Chupinguaia"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Cujubim"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Governador Jorge Teixeira"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Itapuã do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Ministro Andreazza"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Mirante da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Monte Negro"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Nova União"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Parecis"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Pimenteiras do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Primavera de Rondônia"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "São Felipe D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "São Francisco do Guaporé"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Seringueiras"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Teixeirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Theobroma"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Urupá"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Vale do Anari"
          ]);
                $this->city->create([
                    "state_id"=> 21,
            "name"=> "Vale do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Acrelândia"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Assis Brasil"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Brasiléia"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Bujari"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Capixaba"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Cruzeiro do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Epitaciolândia"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Feijó"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Jordão"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Mâncio Lima"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Manoel Urbano"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Marechal Thaumaturgo"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Plácido de Castro"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Porto Walter"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Rio Branco"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Rodrigues Alves"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Santa Rosa do Purus"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Senador Guiomard"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Sena Madureira"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Tarauacá"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Xapuri"
          ]);
                $this->city->create([
                    "state_id"=> 1,
            "name"=> "Porto Acre"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Alvarães"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Amaturá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Anamã"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Anori"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Apuí"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Atalaia do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Autazes"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Barcelos"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Barreirinha"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Benjamin Constant"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Beruri"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Boa Vista do Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Boca do Acre"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Borba"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Caapiranga"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Canutama"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Carauari"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Careiro"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Careiro da Várzea"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Coari"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Codajás"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Eirunepé"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Envira"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Fonte Boa"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Guajará"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Humaitá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Ipixuna"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Iranduba"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Itacoatiara"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Itamarati"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Itapiranga"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Japurá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Juruá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Jutaí"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Lábrea"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Manacapuru"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Manaquiri"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Manaus"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Manicoré"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Maraã"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Maués"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Nhamundá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Nova Olinda do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Novo Airão"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Novo Aripuanã"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Parintins"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Pauini"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Presidente Figueiredo"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Rio Preto da Eva"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Santa Isabel do Rio Negro"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Santo Antônio do Içá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "São Gabriel da Cachoeira"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "São Paulo de Olivença"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "São Sebastião do Uatumã"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Silves"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Tabatinga"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Tapauá"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Tefé"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Tonantins"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Uarini"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Urucará"
          ]);
                $this->city->create([
                    "state_id"=> 3,
            "name"=> "Urucurituba"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Amajari"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Alto Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Bonfim"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Cantá"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Caracaraí"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Caroebe"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Iracema"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Mucajaí"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Normandia"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Pacaraima"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Rorainópolis"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "São João da Baliza"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "São Luiz"
          ]);
                $this->city->create([
                    "state_id"=> 22,
            "name"=> "Uiramutã"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Abaetetuba"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Abel Figueiredo"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Acará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Afuá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Água Azul do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Alenquer"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Almeirim"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Altamira"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Anajás"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Ananindeua"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Anapu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Augusto Corrêa"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Aurora do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Aveiro"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Bagre"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Baião"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Bannach"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Barcarena"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Belém"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Belterra"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Benevides"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Bom Jesus do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Bragança"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Brasil Novo"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Brejo Grande do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Breu Branco"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Breves"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Bujaru"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Cachoeira do Piriá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Cachoeira do Arari"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Cametá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Canaã dos Carajás"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Capanema"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Capitão Poço"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Castanhal"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Chaves"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Colares"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Conceição do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Concórdia do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Cumaru do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Curionópolis"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Curralinho"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Curuá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Curuçá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Dom Eliseu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Eldorado dos Carajás"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Faro"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Floresta do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Garrafão do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Goianésia do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Gurupá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Igarapé-Açu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Igarapé-Miri"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Inhangapi"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Ipixuna do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Irituia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Itaituba"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Itupiranga"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Jacareacanga"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Jacundá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Juruti"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Limoeiro do Ajuru"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Mãe do Rio"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Magalhães Barata"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Marabá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Maracanã"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Marapanim"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Marituba"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Medicilândia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Melgaço"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Mocajuba"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Moju"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Monte Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Muaná"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Nova Esperança do Piriá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Nova Ipixuna"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Nova Timboteua"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Novo Progresso"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Novo Repartimento"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Óbidos"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Oeiras do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Oriximiná"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Ourém"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Ourilândia do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Pacajá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Palestina do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Paragominas"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Parauapebas"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Pau D'arco"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Peixe-Boi"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Piçarra"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Placas"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Ponta de Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Portel"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Porto de Moz"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Prainha"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Primavera"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Quatipuru"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Redenção"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Rio Maria"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Rondon do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Rurópolis"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Salinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Salvaterra"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santa Bárbara do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santa Cruz do Arari"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santa Isabel do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santa Luzia do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santa Maria das Barreiras"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santa Maria do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santana do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santarém"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santarém Novo"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Santo Antônio do Tauá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Caetano de Odivelas"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Domingos do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Domingos do Capim"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Félix do Xingu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Francisco do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Geraldo do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São João da Ponta"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São João de Pirabas"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São João do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Miguel do Guamá"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "São Sebastião da Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Sapucaia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Senador José Porfírio"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Soure"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Tailândia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Terra Alta"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Terra Santa"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Tomé-Açu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Tracuateua"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Trairão"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Tucumã"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Tucuruí"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Ulianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Uruará"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Vigia"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Viseu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Vitória do Xingu"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Xinguara"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Serra do Navio"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Amapá"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Pedra Branca do Amapari"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Calçoene"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Cutias"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Ferreira Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Itaubal"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Laranjal do Jari"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Macapá"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Mazagão"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Oiapoque"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Porto Grande"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Pracuúba"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Santana"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Tartarugalzinho"
          ]);
                $this->city->create([
                    "state_id"=> 4,
            "name"=> "Vitória do Jari"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Abreulândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Aguiarnópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Aliança do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Almas"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Alvorada"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Ananás"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Angico"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Aparecida do Rio Negro"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Aragominas"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Araguacema"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Araguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Araguaína"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Araguanã"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Araguatins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Arapoema"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Arraias"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Augustinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Aurora do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Axixá do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Babaçulândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Bandeirantes do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Barra do Ouro"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Barrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Bernardo Sayão"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Bom Jesus do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Brasilândia do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Brejinho de Nazaré"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Buriti do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Cachoeirinha"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Campos Lindos"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Cariri do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Carmolândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Carrasco Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Caseara"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Centenário"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Chapada de Areia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Chapada da Natividade"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Colinas do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Combinado"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Conceição do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Couto de Magalhães"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Cristalândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Crixás do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Darcinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Dianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Divinópolis do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Dois Irmãos do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Dueré"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Esperantina"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Fátima"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Figueirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Filadélfia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Formoso do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Fortaleza do Tabocão"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Goianorte"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Goiatins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Guaraí"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Gurupi"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Ipueiras"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Itacajá"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Itaguatins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Itapiratins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Itaporã do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Jaú do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Juarina"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Lagoa da Confusão"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Lagoa do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Lajeado"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Lavandeira"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Lizarda"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Luzinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Marianópolis do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Mateiros"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Maurilândia do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Miracema do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Miranorte"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Monte do Carmo"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Monte Santo do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Palmeiras do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Muricilândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Natividade"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Nazaré"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Nova Olinda"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Nova Rosalândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Novo Acordo"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Novo Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Novo Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Oliveira de Fátima"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Palmeirante"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Palmeirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Paraíso do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Paranã"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Pau D'arco"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Pedro Afonso"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Peixe"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Pequizeiro"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Colméia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Pindorama do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Piraquê"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Pium"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Ponte Alta do Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Ponte Alta do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Porto Alegre do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Porto Nacional"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Praia Norte"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Presidente Kennedy"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Pugmil"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Recursolândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Riachinho"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Rio da Conceição"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Rio dos Bois"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Rio Sono"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Sampaio"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Sandolândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Santa Fé do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Santa Maria do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Santa Rita do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Santa Rosa do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Santa Tereza do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Santa Terezinha do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "São Bento do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "São Félix do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "São Miguel do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "São Salvador do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "São Sebastião do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "São Valério da Natividade"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Silvanópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Sítio Novo do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Sucupira"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Taguatinga"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Taipas do Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Talismã"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Palmas"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Tocantínia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Tocantinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Tupirama"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Tupiratins"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Wanderlândia"
          ]);
                $this->city->create([
                    "state_id"=> 27,
            "name"=> "Xambioá"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Açailândia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Afonso Cunha"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Água Doce do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Alcântara"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Aldeias Altas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Altamira do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Alto Alegre do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Alto Alegre do Pindaré"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Alto Parnaíba"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Amapá do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Amarante do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Anajatuba"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Anapurus"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Apicum-Açu"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Araguanã"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Araioses"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Arame"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Arari"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Axixá"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bacabal"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bacabeira"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bacuri"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bacurituba"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Balsas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Barão de Grajaú"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Barra do Corda"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Barreirinhas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Belágua"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bela Vista do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Benedito Leite"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bequimão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bernardo do Mearim"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Boa Vista do Gurupi"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bom Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bom Jesus das Selvas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Bom Lugar"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Brejo"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Brejo de Areia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Buriti"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Buriti Bravo"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Buriticupu"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Buritirana"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cachoeira Grande"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cajapió"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cajari"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Campestre do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cândido Mendes"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cantanhede"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Capinzal do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Carolina"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Carutapera"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Caxias"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cedral"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Central do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Centro do Guilherme"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Centro Novo do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Chapadinha"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cidelândia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Codó"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Coelho Neto"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Colinas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Conceição do Lago-Açu"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Coroatá"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Cururupu"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Davinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Dom Pedro"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Duque Bacelar"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Esperantinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Estreito"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Feira Nova do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Fernando Falcão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Formosa da Serra Negra"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Fortaleza dos Nogueiras"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Fortuna"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Godofredo Viana"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Gonçalves Dias"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Governador Archer"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Governador Edison Lobão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Governador Eugênio Barros"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Governador Luiz Rocha"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Governador Newton Bello"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Governador Nunes Freire"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Graça Aranha"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Grajaú"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Guimarães"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Humberto de Campos"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Icatu"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Igarapé do Meio"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Igarapé Grande"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Imperatriz"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Itaipava do Grajaú"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Itapecuru Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Itinga do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Jatobá"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Jenipapo dos Vieiras"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "João Lisboa"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Joselândia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Junco do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lago da Pedra"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lago do Junco"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lago Verde"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lagoa do Mato"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lago dos Rodrigues"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lagoa Grande do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lajeado Novo"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Lima Campos"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Loreto"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Luís Domingues"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Magalhães de Almeida"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Maracaçumé"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Marajá do Sena"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Maranhãozinho"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Mata Roma"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Matinha"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Matões"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Matões do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Milagres do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Mirador"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Miranda do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Mirinzal"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Monção"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Montes Altos"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Morros"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Nina Rodrigues"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Nova Colinas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Nova Iorque"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Nova Olinda do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Olho D'água das Cunhãs"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Olinda Nova do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Paço do Lumiar"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Palmeirândia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Paraibano"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Parnarama"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Passagem Franca"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pastos Bons"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Paulino Neves"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Paulo Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pedreiras"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pedro do Rosário"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Penalva"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Peri Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Peritoró"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pindaré-Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pinheiro"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pio Xii"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Pirapemas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Poção de Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Porto Franco"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Porto Rico do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Presidente Dutra"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Presidente Juscelino"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Presidente Médici"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Presidente Sarney"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Presidente Vargas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Primeira Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Raposa"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Riachão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Ribamar Fiquene"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Rosário"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Sambaíba"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Filomena do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Helena"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Inês"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Luzia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Luzia do Paruá"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Quitéria do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santa Rita"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santana do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santo Amaro do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Santo Antônio dos Lopes"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Benedito do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Bento"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Bernardo"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Domingos do Azeitão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Domingos do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Félix de Balsas"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Francisco do Brejão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Francisco do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São João Batista"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São João do Carú"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São João do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São João do Soter"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São João dos Patos"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São José de Ribamar"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São José dos Basílios"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Luís"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Luís Gonzaga do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Mateus do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Pedro da Água Branca"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Pedro dos Crentes"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Raimundo das Mangabeiras"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Raimundo do Doca Bezerra"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Roberto"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "São Vicente Ferrer"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Satubinha"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Senador Alexandre Costa"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Senador La Rocque"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Serrano do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Sítio Novo"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Sucupira do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Sucupira do Riachão"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Tasso Fragoso"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Timbiras"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Timon"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Trizidela do Vale"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Tufilândia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Tuntum"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Turiaçu"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Turilândia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Tutóia"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Urbano Santos"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Vargem Grande"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Viana"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Vila Nova dos Martírios"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Vitória do Mearim"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Vitorino Freire"
          ]);
                $this->city->create([
                    "state_id"=> 10,
            "name"=> "Zé Doca"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Acauã"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Agricolândia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Água Branca"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Alagoinha do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Alegrete do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Alto Longá"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Altos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Alvorada do Gurguéia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Amarante"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Angical do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Anísio de Abreu"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Antônio Almeida"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Aroazes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Aroeiras do Itaim"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Arraial"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Assunção do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Avelino Lopes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Baixa Grande do Ribeiro"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Barra D'alcântara"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Barras"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Barreiras do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Barro Duro"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Batalha"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Bela Vista do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Belém do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Beneditinos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Bertolínia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Betânia do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Boa Hora"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Bocaina"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Bom Princípio do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Bonfim do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Boqueirão do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Brasileira"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Brejo do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Buriti dos Lopes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Buriti dos Montes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cabeceiras do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cajazeiras do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cajueiro da Praia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Caldeirão Grande do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Campinas do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Campo Alegre do Fidalgo"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Campo Grande do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Campo Largo do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Campo Maior"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Canavieira"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Canto do Buriti"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Capitão de Campos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Capitão Gervásio Oliveira"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Caracol"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Caraúbas do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Caridade do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Castelo do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Caxingó"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cocal"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cocal de Telha"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cocal dos Alves"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Coivaras"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Colônia do Gurguéia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Colônia do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Conceição do Canindé"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Coronel José Dias"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Corrente"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cristalândia do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Cristino Castro"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Curimatá"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Currais"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Curralinhos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Curral Novo do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Demerval Lobão"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Dirceu Arcoverde"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Dom Expedito Lopes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Domingos Mourão"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Dom Inocêncio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Elesbão Veloso"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Eliseu Martins"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Esperantina"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Fartura do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Flores do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Floresta do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Floriano"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Francinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Francisco Ayres"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Francisco Macedo"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Francisco Santos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Fronteiras"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Geminiano"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Gilbués"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Guadalupe"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Guaribas"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Hugo Napoleão"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Ilha Grande"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Inhuma"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Ipiranga do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Isaías Coelho"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Itainópolis"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Itaueira"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Jacobina do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Jaicós"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Jardim do Mulato"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Jatobá do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Jerumenha"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "João Costa"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Joaquim Pires"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Joca Marques"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "José de Freitas"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Juazeiro do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Júlio Borges"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Jurema"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Lagoinha do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Lagoa Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Lagoa do Barro do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Lagoa de São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Lagoa do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Lagoa do Sítio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Landri Sales"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Luís Correia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Luzilândia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Madeiro"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Manoel Emídio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Marcolândia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Marcos Parente"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Massapê do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Matias Olímpio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Miguel Alves"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Miguel Leão"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Milton Brandão"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Monsenhor Gil"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Monsenhor Hipólito"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Monte Alegre do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Morro Cabeça No Tempo"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Morro do Chapéu do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Murici dos Portelas"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Nazaré do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Nossa Senhora de Nazaré"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Nossa Senhora dos Remédios"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Novo Oriente do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Novo Santo Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Oeiras"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Olho D'água do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Padre Marcos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Paes Landim"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pajeú do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Palmeira do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Palmeirais"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Paquetá"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Parnaguá"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Parnaíba"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Passagem Franca do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Patos do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pau D'arco do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Paulistana"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pavussu"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pedro Ii"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pedro Laurentino"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Nova Santa Rita"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Picos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pimenteiras"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Pio Ix"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Piracuruca"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Piripiri"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Porto"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Porto Alegre do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Prata do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Queimada Nova"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Redenção do Gurguéia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Regeneração"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Riacho Frio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Ribeira do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Ribeiro Gonçalves"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Rio Grande do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santa Cruz do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santa Cruz dos Milagres"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santa Filomena"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santa Luz"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santana do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santa Rosa do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santo Antônio de Lisboa"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santo Antônio dos Milagres"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Santo Inácio do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Braz do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Félix do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Francisco de Assis do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Francisco do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Gonçalo do Gurguéia"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Gonçalo do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São João da Canabrava"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São João da Fronteira"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São João da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São João da Varjota"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São João do Arraial"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São João do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São José do Divino"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São José do Peixe"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São José do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Julião"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Lourenço do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Luis do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Miguel da Baixa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Miguel do Fidalgo"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Miguel do Tapuio"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Pedro do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "São Raimundo Nonato"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Sebastião Barros"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Sebastião Leal"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Sigefredo Pacheco"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Simões"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Simplício Mendes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Socorro do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Sussuapara"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Tamboril do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Tanque do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Teresina"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "União"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Uruçuí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Valença do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Várzea Branca"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Várzea Grande"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Vera Mendes"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Vila Nova do Piauí"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Wall Ferraz"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Abaiara"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Acarape"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Acaraú"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Acopiara"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Aiuaba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Alcântaras"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Altaneira"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Alto Santo"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Amontada"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Antonina do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Apuiarés"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Aquiraz"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Aracati"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Aracoiaba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ararendá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Araripe"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Aratuba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Arneiroz"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Assaré"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Aurora"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Baixio"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Banabuiú"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Barbalha"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Barreira"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Barro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Barroquinha"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Baturité"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Beberibe"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Bela Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Boa Viagem"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Brejo Santo"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Camocim"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Campos Sales"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Canindé"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Capistrano"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Caridade"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Cariré"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Caririaçu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Cariús"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Carnaubal"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Cascavel"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Catarina"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Catunda"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Caucaia"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Cedro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Chaval"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Choró"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Chorozinho"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Coreaú"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Crateús"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Crato"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Croatá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Deputado Irapuan Pinheiro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ererê"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Eusébio"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Farias Brito"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Forquilha"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Fortaleza"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Fortim"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Frecheirinha"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "General Sampaio"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Graça"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Granja"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Granjeiro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Groaíras"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Guaiúba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Guaraciaba do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Guaramiranga"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Hidrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Horizonte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ibaretama"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ibiapina"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ibicuitinga"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Icapuí"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Icó"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Iguatu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Independência"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ipaporanga"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ipaumirim"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ipu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ipueiras"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Iracema"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Irauçuba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itaiçaba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itaitinga"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itapagé"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itapipoca"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itapiúna"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itarema"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Itatira"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jaguaretama"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jaguaribara"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jaguaribe"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jaguaruana"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jati"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jijoca de Jericoacoara"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Juazeiro do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Jucás"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Lavras da Mangabeira"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Limoeiro do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Madalena"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Maracanaú"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Maranguape"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Marco"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Martinópole"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Massapê"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Mauriti"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Meruoca"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Milagres"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Milhã"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Miraíma"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Missão Velha"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Mombaça"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Monsenhor Tabosa"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Morada Nova"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Moraújo"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Morrinhos"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Mucambo"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Mulungu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Nova Olinda"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Nova Russas"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Novo Oriente"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ocara"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Orós"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pacajus"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pacatuba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pacoti"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pacujá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Palhano"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Palmácia"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Paracuru"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Paraipaba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Parambu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Paramoti"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pedra Branca"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Penaforte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pentecoste"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pereiro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pindoretama"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Piquet Carneiro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Pires Ferreira"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Poranga"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Porteiras"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Potengi"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Potiretama"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Quiterianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Quixadá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Quixelô"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Quixeramobim"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Quixeré"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Redenção"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Reriutaba"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Russas"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Saboeiro"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Salitre"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Santana do Acaraú"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Santana do Cariri"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Santa Quitéria"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "São Benedito"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "São Gonçalo do Amarante"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "São João do Jaguaribe"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "São Luís do Curu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Senador Pompeu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Senador Sá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Sobral"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Solonópole"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tabuleiro do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tamboril"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tarrafas"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tauá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tejuçuoca"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tianguá"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Trairi"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Tururu"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Ubajara"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Umari"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Umirim"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Uruburetama"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Uruoca"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Varjota"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Várzea Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 6,
            "name"=> "Viçosa do Ceará"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Acari"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Açu"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Afonso Bezerra"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Água Nova"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Alexandria"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Almino Afonso"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Alto do Rodrigues"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Angicos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Antônio Martins"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Apodi"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Areia Branca"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Arês"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Augusto Severo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Baía Formosa"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Baraúna"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Barcelona"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Bento Fernandes"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Bodó"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Brejinho"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Caiçara do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Caiçara do Rio do Vento"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Caicó"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Campo Redondo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Canguaretama"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Caraúbas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Carnaúba dos Dantas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Carnaubais"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Ceará-Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Cerro Corá"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Coronel Ezequiel"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Coronel João Pessoa"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Cruzeta"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Currais Novos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Doutor Severiano"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Parnamirim"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Encanto"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Equador"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Espírito Santo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Extremoz"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Felipe Guerra"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Fernando Pedroza"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Florânia"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Francisco Dantas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Frutuoso Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Galinhos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Goianinha"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Governador Dix-Sept Rosado"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Grossos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Guamaré"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Ielmo Marinho"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Ipanguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Ipueira"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Itajá"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Itaú"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jaçanã"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jandaíra"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Janduís"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Januário Cicco"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Japi"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jardim de Angicos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jardim de Piranhas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jardim do Seridó"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "João Câmara"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "João Dias"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "José da Penha"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jucurutu"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Jundiá"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lagoa D'anta"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lagoa de Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lagoa de Velhos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lagoa Nova"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lagoa Salgada"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lajes"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lajes Pintadas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Lucrécia"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Luís Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Macaíba"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Macau"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Major Sales"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Marcelino Vieira"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Martins"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Maxaranguape"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Messias Targino"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Montanhas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Monte Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Monte das Gameleiras"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Mossoró"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Natal"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Nísia Floresta"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Nova Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Olho-D'água do Borges"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Ouro Branco"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Paraú"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Parazinho"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Parelhas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Rio do Fogo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Passa e Fica"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Passagem"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Patu"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Santa Maria"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pau dos Ferros"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pedra Grande"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pedra Preta"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pedro Avelino"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pedro Velho"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pendências"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pilões"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Poço Branco"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Portalegre"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Porto do Mangue"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Presidente Juscelino"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Pureza"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Rafael Fernandes"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Rafael Godeiro"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Riacho da Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Riacho de Santana"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Riachuelo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Rodolfo Fernandes"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Tibau"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Ruy Barbosa"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Santa Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Santana do Matos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Santana do Seridó"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Santo Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Bento do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Bento do Trairí"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Fernando"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Francisco do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Gonçalo do Amarante"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São João do Sabugi"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São José de Mipibu"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São José do Campestre"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São José do Seridó"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Miguel"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Miguel do Gostoso"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Paulo do Potengi"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Pedro"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Rafael"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Tomé"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "São Vicente"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Senador Elói de Souza"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Senador Georgino Avelino"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Serra de São Bento"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Serra do Mel"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Serra Negra do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Serrinha"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Serrinha dos Pintos"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Severiano Melo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Sítio Novo"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Taboleiro Grande"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Taipu"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Tangará"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Tenente Ananias"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Tenente Laurentino Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Tibau do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Timbaúba dos Batistas"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Touros"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Triunfo Potiguar"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Umarizal"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Upanema"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Várzea"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Venha-Ver"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Vera Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Viçosa"
          ]);
                $this->city->create([
                    "state_id"=> 20,
            "name"=> "Vila Flor"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Água Branca"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Aguiar"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Alagoa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Alagoa Nova"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Alagoinha"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Alcantil"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Algodão de Jandaíra"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Alhandra"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São João do Rio do Peixe"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Amparo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Aparecida"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Araçagi"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Arara"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Araruna"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Areia"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Areia de Baraúnas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Areial"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Aroeiras"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Assunção"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Baía da Traição"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Bananeiras"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Baraúna"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Barra de Santana"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Barra de Santa Rosa"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Barra de São Miguel"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Bayeux"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Belém"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Belém do Brejo do Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Bernardino Batista"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Boa Ventura"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Bom Sucesso"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Bonito de Santa Fé"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Boqueirão"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Igaracy"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Borborema"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Brejo do Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Brejo dos Santos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Caaporã"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cabaceiras"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cabedelo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cachoeira dos Índios"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cacimba de Areia"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cacimba de Dentro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cacimbas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Caiçara"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cajazeiras"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cajazeirinhas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Caldas Brandão"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Camalaú"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Campina Grande"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Capim"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Caraúbas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Carrapateira"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Casserengue"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Catingueira"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Catolé do Rocha"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Caturité"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Conceição"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Condado"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Conde"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Congo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Coremas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Coxixola"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cruz do Espírito Santo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cubati"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cuité"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cuitegi"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Cuité de Mamanguape"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Curral de Cima"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Curral Velho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Damião"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Desterro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Vista Serrana"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Diamante"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Dona Inês"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Duas Estradas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Emas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Esperança"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Fagundes"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Frei Martinho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Gado Bravo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Guarabira"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Gurinhém"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Gurjão"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Ibiara"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Imaculada"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Ingá"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Itabaiana"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Itaporanga"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Itapororoca"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Itatuba"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Jacaraú"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Jericó"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "João Pessoa"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Juarez Távora"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Juazeirinho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Junco do Seridó"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Juripiranga"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Juru"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Lagoa"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Lagoa de Dentro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Lagoa Seca"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Lastro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Livramento"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Logradouro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Lucena"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mãe D'água"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Malta"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mamanguape"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Manaíra"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Marcação"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mari"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Marizópolis"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Massaranduba"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mataraca"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Matinhas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mato Grosso"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Maturéia"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mogeiro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Montadas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Monte Horebe"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Monteiro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Mulungu"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Natuba"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Nazarezinho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Nova Floresta"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Nova Olinda"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Nova Palmeira"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Olho D'água"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Olivedos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Ouro Velho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Parari"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Passagem"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Patos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pedra Branca"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pedra Lavrada"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pedras de Fogo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Piancó"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Picuí"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pilar"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pilões"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pilõezinhos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pirpirituba"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pitimbu"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pocinhos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Poço Dantas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Poço de José de Moura"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pombal"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Prata"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Princesa Isabel"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Puxinanã"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Queimadas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Quixabá"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Remígio"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Pedro Régis"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Riachão"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Riachão do Bacamarte"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Riachão do Poço"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Riacho de Santo Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Riacho dos Cavalos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Rio Tinto"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Salgadinho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Salgado de São Félix"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Cecília"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Helena"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Inês"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Luzia"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santana de Mangueira"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santana dos Garrotes"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santarém"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Rita"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santa Teresinha"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Santo André"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Bento"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Bentinho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Domingos do Cariri"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Domingos de Pombal"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São João do Cariri"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São João do Tigre"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José da Lagoa Tapada"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José de Caiana"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José de Espinharas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José dos Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José de Piranhas"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José de Princesa"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José do Bonfim"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José do Brejo do Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José do Sabugi"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São José dos Cordeiros"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Mamede"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Miguel de Taipu"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Sebastião de Lagoa de Roça"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "São Sebastião do Umbuzeiro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Sapé"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Seridó"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Serra Branca"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Serra da Raiz"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Serra Grande"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Serra Redonda"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Serraria"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Sertãozinho"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Sobrado"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Solânea"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Soledade"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Sossêgo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Sousa"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Sumé"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Campo de Santana"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Taperoá"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Tavares"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Teixeira"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Tenório"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Triunfo"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Uiraúna"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Umbuzeiro"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Várzea"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Vieirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 15,
            "name"=> "Zabelê"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Abreu e Lima"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Afogados da Ingazeira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Afrânio"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Agrestina"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Água Preta"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Águas Belas"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Alagoinha"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Aliança"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Altinho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Amaraji"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Angelim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Araçoiaba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Araripina"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Arcoverde"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Barra de Guabiraba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Barreiros"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Belém de Maria"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Belém de São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Belo Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Betânia"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Bezerros"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Bodocó"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Bom Conselho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Bom Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Brejão"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Brejinho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Brejo da Madre de Deus"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Buenos Aires"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Buíque"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cabo de Santo Agostinho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cabrobó"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cachoeirinha"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Caetés"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Calçado"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Calumbi"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Camaragibe"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Camocim de São Félix"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Camutanga"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Canhotinho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Capoeiras"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Carnaíba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Carnaubeira da Penha"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Carpina"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Caruaru"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Casinhas"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Catende"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cedro"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Chã de Alegria"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Chã Grande"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Condado"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Correntes"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cortês"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cumaru"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Cupira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Custódia"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Dormentes"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Escada"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Exu"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Feira Nova"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Fernando de Noronha"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ferreiros"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Flores"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Floresta"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Frei Miguelinho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Gameleira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Garanhuns"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Glória do Goitá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Goiana"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Granito"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Gravatá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Iati"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ibimirim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ibirajuba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Igarassu"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Iguaraci"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Inajá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ingazeira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ipojuca"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ipubi"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Itacuruba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Itaíba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ilha de Itamaracá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Itambé"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Itapetim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Itapissuma"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Itaquitinga"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jaboatão dos Guararapes"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jaqueira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jataúba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jatobá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "João Alfredo"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Joaquim Nabuco"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jucati"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jupi"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Jurema"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Lagoa do Carro"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Lagoa do Itaenga"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Lagoa do Ouro"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Lagoa dos Gatos"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Lagoa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Lajedo"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Limoeiro"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Macaparana"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Machados"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Manari"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Maraial"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Mirandiba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Moreno"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Nazaré da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Olinda"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Orobó"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Orocó"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ouricuri"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Palmares"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Palmeirina"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Panelas"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Paranatama"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Parnamirim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Passira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Paudalho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Pedra"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Pesqueira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Petrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Petrolina"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Poção"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Pombos"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Primavera"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Quipapá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Quixaba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Recife"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Riacho das Almas"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Ribeirão"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Rio Formoso"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Sairé"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Salgadinho"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Salgueiro"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Saloá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Sanharó"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Cruz da Baixa Verde"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Cruz do Capibaribe"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Filomena"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Maria da Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Maria do Cambucá"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Santa Terezinha"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São Benedito do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São Bento do Una"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São Caitano"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São João"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São Joaquim do Monte"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São José da Coroa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São José do Belmonte"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São José do Egito"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São Lourenço da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "São Vicente Ferrer"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Serra Talhada"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Serrita"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Sertânia"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Sirinhaém"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Moreilândia"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Solidão"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Surubim"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tabira"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tacaimbó"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tacaratu"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tamandaré"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Taquaritinga do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Terezinha"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Terra Nova"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Timbaúba"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Toritama"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tracunhaém"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Trindade"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Triunfo"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tupanatinga"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Tuparetama"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Venturosa"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Verdejante"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Vertente do Lério"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Vertentes"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Vicência"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Vitória de Santo Antão"
          ]);
                $this->city->create([
                    "state_id"=> 16,
            "name"=> "Xexéu"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Água Branca"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Anadia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Arapiraca"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Atalaia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Barra de Santo Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Barra de São Miguel"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Batalha"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Belém"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Belo Monte"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Boca da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Branquinha"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Cacimbinhas"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Cajueiro"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Campestre"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Campo Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Campo Grande"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Canapi"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Capela"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Carneiros"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Chã Preta"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Coité do Nóia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Colônia Leopoldina"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Coqueiro Seco"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Coruripe"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Craíbas"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Delmiro Gouveia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Dois Riachos"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Estrela de Alagoas"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Feira Grande"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Feliz Deserto"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Flexeiras"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Girau do Ponciano"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Ibateguara"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Igaci"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Igreja Nova"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Inhapi"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Jacaré dos Homens"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Jacuípe"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Japaratinga"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Jaramataia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Jequiá da Praia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Joaquim Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Jundiá"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Junqueiro"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Lagoa da Canoa"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Limoeiro de Anadia"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Maceió"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Major Isidoro"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Maragogi"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Maravilha"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Marechal Deodoro"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Maribondo"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Mar Vermelho"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Mata Grande"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Matriz de Camaragibe"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Messias"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Minador do Negrão"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Monteirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Murici"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Novo Lino"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Olho D'água das Flores"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Olho D'água do Casado"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Olho D'água Grande"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Olivença"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Ouro Branco"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Palestina"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Palmeira dos Índios"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Pão de Açúcar"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Pariconha"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Paripueira"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Passo de Camaragibe"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Paulo Jacinto"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Penedo"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Piaçabuçu"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Pilar"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Pindoba"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Piranhas"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Poço das Trincheiras"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Porto Calvo"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Porto de Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Porto Real do Colégio"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Quebrangulo"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Rio Largo"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Roteiro"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Santa Luzia do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Santana do Ipanema"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Santana do Mundaú"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São Brás"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São José da Laje"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São José da Tapera"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São Luís do Quitunde"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São Miguel dos Campos"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São Miguel dos Milagres"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "São Sebastião"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Satuba"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Senador Rui Palmeira"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Tanque D'arca"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Taquarana"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Teotônio Vilela"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Traipu"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "União dos Palmares"
          ]);
                $this->city->create([
                    "state_id"=> 2,
            "name"=> "Viçosa"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Amparo de São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Aquidabã"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Aracaju"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Arauá"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Areia Branca"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Barra dos Coqueiros"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Boquim"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Brejo Grande"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Campo do Brito"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Canhoba"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Canindé de São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Capela"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Carira"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Carmópolis"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Cedro de São João"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Cristinápolis"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Cumbe"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Divina Pastora"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Estância"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Feira Nova"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Frei Paulo"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Gararu"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "General Maynard"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Gracho Cardoso"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Ilha das Flores"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Indiaroba"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Itabaiana"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Itabaianinha"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Itabi"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Itaporanga D'ajuda"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Japaratuba"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Japoatã"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Lagarto"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Laranjeiras"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Macambira"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Malhada dos Bois"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Malhador"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Maruim"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Moita Bonita"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Monte Alegre de Sergipe"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Muribeca"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Neópolis"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Nossa Senhora Aparecida"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Nossa Senhora da Glória"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Nossa Senhora das Dores"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Nossa Senhora de Lourdes"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Nossa Senhora do Socorro"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Pacatuba"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Pedra Mole"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Pedrinhas"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Pinhão"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Pirambu"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Poço Redondo"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Poço Verde"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Porto da Folha"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Propriá"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Riachão do Dantas"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Riachuelo"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Ribeirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Rosário do Catete"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Salgado"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Santa Luzia do Itanhy"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Santana do São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Santa Rosa de Lima"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Santo Amaro das Brotas"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "São Cristóvão"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "São Domingos"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "São Miguel do Aleixo"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Simão Dias"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Siriri"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Telha"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Tobias Barreto"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Tomar do Geru"
          ]);
                $this->city->create([
                    "state_id"=> 25,
            "name"=> "Umbaúba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Abaíra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Abaré"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Acajutiba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Adustina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Água Fria"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Érico Cardoso"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Aiquara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Alagoinhas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Alcobaça"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Almadina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Amargosa"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Amélia Rodrigues"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "América Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Anagé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Andaraí"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Andorinha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Angical"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Anguera"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Antas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Antônio Cardoso"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Antônio Gonçalves"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Aporá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Apuarema"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Aracatu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Araças"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Araci"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Aramari"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Arataca"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Aratuípe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Aurelino Leal"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Baianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Baixa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Banzaê"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barra da Estiva"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barra do Choça"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barra do Mendes"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barra do Rocha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barreiras"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barro Alto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barrocas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Barro Preto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Belmonte"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Belo Campo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Biritinga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Boa Nova"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Boa Vista do Tupim"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Bom Jesus da Lapa"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Bom Jesus da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Boninal"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Boquira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Botuporã"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Brejões"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Brejolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Brotas de Macaúbas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Brumado"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Buerarema"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Buritirama"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caatiba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cabaceiras do Paraguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cachoeira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caculé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caém"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caetanos"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caetité"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cafarnaum"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cairu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caldeirão Grande"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Camacan"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Camaçari"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Camamu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Campo Alegre de Lourdes"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Campo Formoso"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Canápolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Canarana"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Canavieiras"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Candeal"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Candeias"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Candiba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cândido Sales"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cansanção"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Canudos"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Capela do Alto Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Capim Grosso"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caraíbas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caravelas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cardeal da Silva"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Carinhanha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Casa Nova"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Castro Alves"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Catolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Catu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Caturama"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Central"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Chorrochó"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cícero Dantas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cipó"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Coaraci"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cocos"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Conceição da Feira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Conceição do Almeida"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Conceição do Coité"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Conceição do Jacuípe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Conde"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Condeúba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Contendas do Sincorá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Coração de Maria"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cordeiros"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Coribe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Coronel João Sá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Correntina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cotegipe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cravolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Crisópolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cristópolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Cruz das Almas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Curaçá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Dário Meira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Dias D'ávila"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Dom Basílio"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Dom Macedo Costa"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Elísio Medrado"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Encruzilhada"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Entre Rios"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Esplanada"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Euclides da Cunha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Eunápolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Fátima"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Feira da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Feira de Santana"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Filadélfia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Firmino Alves"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Floresta Azul"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Formosa do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Gandu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Gavião"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Gentio do Ouro"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Glória"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Gongogi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Governador Mangabeira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Guajeru"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Guanambi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Guaratinga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Heliópolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Iaçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibiassucê"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibicaraí"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibicoara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibicuí"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibipeba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibipitanga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibiquera"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibirapitanga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibirapuã"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibirataia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibitiara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibititá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ibotirama"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ichu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Igaporã"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Igrapiúna"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Iguaí"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ilhéus"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Inhambupe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ipecaetá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ipiaú"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ipirá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ipupiara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Irajuba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Iramaia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Iraquara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Irará"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Irecê"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itabela"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itaberaba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itabuna"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itacaré"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itaeté"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itagi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itagibá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itagimirim"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itaguaçu da Bahia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itaju do Colônia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itajuípe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itamaraju"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itamari"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itambé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itanagra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itanhém"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itaparica"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itapé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itapebi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itapetinga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itapicuru"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itapitanga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itaquara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itarantim"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itatim"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itiruçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itiúba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Itororó"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ituaçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ituberá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Iuiú"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jaborandi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jacaraci"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jacobina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jaguaquara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jaguarari"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jaguaripe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jandaíra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jequié"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jeremoabo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jiquiriçá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jitaúna"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "João Dourado"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Juazeiro"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jucuruçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jussara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jussari"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Jussiape"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lafaiete Coutinho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lagoa Real"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Laje"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lajedão"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lajedinho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lajedo do Tabocal"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lamarão"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lapão"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lauro de Freitas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Lençóis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Licínio de Almeida"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Livramento de Nossa Senhora"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Luís Eduardo Magalhães"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Macajuba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Macarani"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Macaúbas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Macururé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Madre de Deus"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Maetinga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Maiquinique"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mairi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Malhada"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Malhada de Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Manoel Vitorino"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mansidão"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Maracás"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Maragogipe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Maraú"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Marcionílio Souza"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mascote"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mata de São João"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Matina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Medeiros Neto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Miguel Calmon"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Milagres"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mirangaba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mirante"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Monte Santo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Morpará"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Morro do Chapéu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mortugaba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mucugê"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mucuri"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mulungu do Morro"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mundo Novo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Muniz Ferreira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Muquém de São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Muritiba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Mutuípe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nazaré"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nilo Peçanha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nordestina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Canaã"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Fátima"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Ibiá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Itarana"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Redenção"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Soure"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Nova Viçosa"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Novo Horizonte"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Novo Triunfo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Olindina"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Oliveira dos Brejinhos"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ouriçangas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ourolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Palmas de Monte Alto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Palmeiras"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Paramirim"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Paratinga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Paripiranga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pau Brasil"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Paulo Afonso"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pé de Serra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pedrão"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pedro Alexandre"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Piatã"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pilão Arcado"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pindaí"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pindobaçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pintadas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Piraí do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Piripá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Piritiba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Planaltino"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Planalto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Poções"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Pojuca"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ponto Novo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Porto Seguro"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Potiraguá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Prado"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Presidente Dutra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Presidente Jânio Quadros"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Presidente Tancredo Neves"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Queimadas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Quijingue"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Quixabeira"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Rafael Jambeiro"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Remanso"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Retirolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Riachão das Neves"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Riachão do Jacuípe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Riacho de Santana"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ribeira do Amparo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ribeira do Pombal"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ribeirão do Largo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Rio de Contas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Rio do Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Rio do Pires"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Rio Real"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Rodelas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ruy Barbosa"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Salinas da Margarida"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Salvador"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Bárbara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Brígida"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Cruz Cabrália"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Cruz da Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Inês"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santaluz"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Luzia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Maria da Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santana"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santanópolis"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Rita de Cássia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santa Teresinha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santo Amaro"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santo Antônio de Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Santo Estêvão"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Desidério"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Domingos"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Félix"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Félix do Coribe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Felipe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Francisco do Conde"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Gabriel"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Gonçalo dos Campos"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São José da Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São José do Jacuípe"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Miguel das Matas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "São Sebastião do Passé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sapeaçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sátiro Dias"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Saubara"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Saúde"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Seabra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sebastião Laranjeiras"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Senhor do Bonfim"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Serra do Ramalho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sento Sé"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Serra Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Serra Preta"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Serrinha"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Serrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Simões Filho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sítio do Mato"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sítio do Quinto"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Sobradinho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Souto Soares"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tabocas do Brejo Velho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tanhaçu"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tanque Novo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tanquinho"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Taperoá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tapiramutá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Teixeira de Freitas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Teodoro Sampaio"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Teofilândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Teolândia"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Terra Nova"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tremedal"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Tucano"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Uauá"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ubaíra"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ubaitaba"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Ubatã"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Uibaí"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Umburanas"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Una"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Urandi"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Uruçuca"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Utinga"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Valença"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Valente"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Várzea da Roça"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Várzea do Poço"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Várzea Nova"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Varzedo"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Vera Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Vereda"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Vitória da Conquista"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Wagner"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Wanderley"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Wenceslau Guimarães"
          ]);
                $this->city->create([
                    "state_id"=> 5,
            "name"=> "Xique-Xique"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Abadia dos Dourados"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Abaeté"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Abre Campo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Acaiaca"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Açucena"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Água Boa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Água Comprida"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Aguanil"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Águas Formosas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Águas Vermelhas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Aimorés"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Aiuruoca"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alagoa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Albertina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Além Paraíba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alfenas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alfredo Vasconcelos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Almenara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alpercata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alpinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alterosa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alto Caparaó"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alto Rio Doce"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alvarenga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alvinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alvorada de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Amparo do Serra"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Andradas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cachoeira de Pajeú"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Andrelândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Angelândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Antônio Carlos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Antônio Dias"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Antônio Prado de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araçaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Aracitaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araçuaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araguari"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Arantina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araponga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araporã"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Arapuá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araújos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Araxá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Arceburgo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Arcos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Areado"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Argirita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Aricanduva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Arinos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Astolfo Dutra"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ataléia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Augusto de Lima"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Baependi"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Baldim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bambuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bandeira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bandeira do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Barão de Cocais"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Barão de Monte Alto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Barbacena"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Barra Longa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Barroso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bela Vista de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Belmiro Braga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Belo Horizonte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Belo Oriente"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Belo Vale"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Berilo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bertópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Berizal"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Betim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bias Fortes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bicas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Biquinhas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Boa Esperança"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bocaina de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bocaiúva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Despacho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Jardim de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Jesus da Penha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Jesus do Amparo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Jesus do Galho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Repouso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bom Sucesso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bonfim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bonfinópolis de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bonito de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Borda da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Botelhos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Botumirim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Brasilândia de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Brasília de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Brás Pires"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Braúnas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Brasópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Brumadinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bueno Brandão"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Buenópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Bugre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Buritis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Buritizeiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cabeceira Grande"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cabo Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cachoeira da Prata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cachoeira de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cachoeira Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caetanópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caeté"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caiana"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cajuri"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caldas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Camacho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Camanducaia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cambuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cambuquira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campanário"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campanha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campestre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campina Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campo Azul"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campo Belo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campo do Meio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campo Florido"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campos Altos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Campos Gerais"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Canaã"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Canápolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cana Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Candeias"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cantagalo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caparaó"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capela Nova"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capelinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capetinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capim Branco"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capitão Andrade"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capitão Enéas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Capitólio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caputira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caraí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caranaíba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carandaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carangola"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caratinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carbonita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Careaçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carlos Chagas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmésia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmo da Cachoeira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmo da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmo de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmo do Cajuru"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmo do Paranaíba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmo do Rio Claro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carmópolis de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carneirinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carrancas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carvalhópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Carvalhos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Casa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cascalho Rico"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cássia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição da Barra de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cataguases"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Catas Altas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Catas Altas da Noruega"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Catuji"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Catuti"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Caxambu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cedro do Abaeté"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Central de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Centralina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Chácara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Chalé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Chapada do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Chapada Gaúcha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Chiador"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cipotânea"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Claraval"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Claro dos Poções"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cláudio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coimbra"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coluna"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Comendador Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Comercinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição da Aparecida"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição das Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição das Alagoas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição de Ipanema"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição do Mato Dentro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição do Rio Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conceição dos Ouros"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cônego Marinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Confins"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Congonhal"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Congonhas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Congonhas do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conquista"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conselheiro Lafaiete"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Conselheiro Pena"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Consolação"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Contagem"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coqueiral"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coração de Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cordisburgo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cordislândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Corinto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coroaci"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coromandel"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coronel Fabriciano"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coronel Murta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coronel Pacheco"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Coronel Xavier Chaves"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Córrego Danta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Córrego do Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Córrego Fundo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Córrego Novo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Couto de Magalhães de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Crisólita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cristais"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cristália"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cristiano Otoni"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cristina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Crucilândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cruzeiro da Fortaleza"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cruzília"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Cuparaque"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Curral de Dentro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Curvelo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Datas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Delfim Moreira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Delfinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Delta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Descoberto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Desterro de Entre Rios"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Desterro do Melo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Diamantina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Diogo de Vasconcelos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dionísio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divinésia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divino"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divino das Laranjeiras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divinolândia de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divisa Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divisa Nova"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Divisópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dom Bosco"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dom Cavati"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dom Joaquim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dom Silvério"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dom Viçoso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dona Eusébia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dores de Campos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dores de Guanhães"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dores do Indaiá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Dores do Turvo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Doresópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Douradoquara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Durandé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Elói Mendes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Engenheiro Caldas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Engenheiro Navarro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Entre Folhas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Entre Rios de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ervália"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Esmeraldas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Espera Feliz"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Espinosa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Espírito Santo do Dourado"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Estiva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Estrela Dalva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Estrela do Indaiá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Estrela do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Eugenópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ewbank da Câmara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Extrema"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fama"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Faria Lemos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Felício dos Santos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Gonçalo do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Felisburgo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Felixlândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fernandes Tourinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ferros"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fervedouro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Florestal"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Formiga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Formoso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fortaleza de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fortuna de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Francisco Badaró"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Francisco Dumont"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Francisco Sá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Franciscópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Frei Gaspar"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Frei Inocêncio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Frei Lagonegro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fronteira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fronteira dos Vales"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Fruta de Leite"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Frutal"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Funilândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Galiléia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Gameleiras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Glaucilândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Goiabeira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Goianá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Gonçalves"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Gonzaga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Gouveia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Governador Valadares"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Grão Mogol"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Grupiara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guanhães"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guapé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guaraciaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guaraciama"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guaranésia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guarani"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guarará"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guarda-Mor"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guaxupé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guidoval"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guimarânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Guiricema"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Gurinhatã"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Heliodora"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Iapu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibertioga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibiá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibiaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibiracatu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibiraci"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibirité"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibitiúra de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ibituruna"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Icaraí de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Igarapé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Igaratinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Iguatama"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ijaci"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ilicínea"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Imbé de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Inconfidentes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Indaiabira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Indianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ingaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Inhapim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Inhaúma"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Inimutaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ipaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ipanema"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ipatinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ipiaçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ipuiúna"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Iraí de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itabira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itabirinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itabirito"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itacambira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itacarambi"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itaguara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itaipé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itajubá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itamarandiba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itamarati de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itambacuri"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itambé do Mato Dentro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itamogi"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itamonte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itanhandu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itanhomi"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itaobim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itapagipe"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itapecerica"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itapeva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itatiaiuçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itaú de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itaúna"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itaverava"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itueta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ituiutaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itumirim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Iturama"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Itutinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jaboticatubas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jacinto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jacuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jacutinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jaguaraçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jaíba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jampruca"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Janaúba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Januária"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Japaraíba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Japonvar"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jeceaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jenipapo de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jequeri"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jequitaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jequitibá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jequitinhonha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jesuânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Joaíma"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Joanésia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "João Monlevade"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "João Pinheiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Joaquim Felício"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Jordânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "José Gonçalves de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "José Raydan"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Josenópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova União"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Juatuba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Juiz de Fora"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Juramento"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Juruaia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Juvenília"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ladainha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagamar"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagoa da Prata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagoa dos Patos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagoa Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagoa Formosa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagoa Grande"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lagoa Santa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lajinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lambari"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lamim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Laranjal"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lassance"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lavras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Leandro Ferreira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Leme do Prado"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Leopoldina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Liberdade"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lima Duarte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Limeira do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Lontra"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Luisburgo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Luislândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Luminárias"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Luz"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Machacalis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Machado"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Madre de Deus de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Malacacheta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mamonas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Manga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Manhuaçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Manhumirim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mantena"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Maravilhas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mar de Espanha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Maria da Fé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mariana"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Marilac"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mário Campos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Maripá de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Marliéria"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Marmelópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Martinho Campos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Martins Soares"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mata Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Materlândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mateus Leme"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Matias Barbosa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Matias Cardoso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Matipó"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mato Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Matozinhos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Matutina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Medeiros"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Medina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mendes Pimentel"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mercês"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mesquita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Minas Novas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Minduri"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mirabela"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Miradouro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Miraí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Miravânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Moeda"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Moema"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monjolos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monsenhor Paulo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Montalvânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Alegre de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Azul"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Belo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Carmelo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Formoso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Santo de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Montes Claros"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Monte Sião"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Montezuma"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Morada Nova de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Morro da Garça"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Morro do Pilar"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Munhoz"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Muriaé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mutum"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Muzambinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nacip Raydan"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nanuque"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Naque"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Natalândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Natércia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nazareno"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nepomuceno"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ninheira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Belém"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Era"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Lima"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Módica"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Ponte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Porteirinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Resende"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Nova Serrana"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Novo Cruzeiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Novo Oriente de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Novorizonte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Olaria"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Olhos-D'água"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Olímpio Noronha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Oliveira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Oliveira Fortes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Onça de Pitangui"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Oratórios"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Orizânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ouro Branco"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ouro Fino"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ouro Preto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ouro Verde de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Padre Carvalho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Padre Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paineiras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pains"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pai Pedro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paiva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Palma"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Palmópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Papagaios"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paracatu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pará de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paraguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paraisópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paraopeba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Passabém"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Passa Quatro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Passa Tempo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Passa-Vinte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Passos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Patis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Patos de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Patrocínio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Patrocínio do Muriaé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paula Cândido"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Paulistas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pavão"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Peçanha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedra Azul"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedra Bonita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedra do Anta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedra do Indaiá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedra Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedralva"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedras de Maria da Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedrinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedro Leopoldo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pedro Teixeira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pequeri"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pequi"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Perdigão"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Perdizes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Perdões"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Periquito"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pescador"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piau"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piedade de Caratinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piedade de Ponte Nova"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piedade do Rio Grande"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piedade dos Gerais"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pimenta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pingo-D'água"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pintópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piracema"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pirajuba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piranga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piranguçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piranguinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pirapetinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pirapora"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piraúba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pitangui"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Piumhi"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Planura"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Poço Fundo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Poços de Caldas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pocrane"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pompéu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ponte Nova"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ponto Chique"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ponto dos Volantes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Porteirinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Porto Firme"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Poté"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pouso Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pouso Alto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Prados"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Prata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pratápolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Pratinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Presidente Bernardes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Presidente Juscelino"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Presidente Kubitschek"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Presidente Olegário"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Alto Jequitibá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Prudente de Morais"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Quartel Geral"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Queluzito"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Raposos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Raul Soares"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Recreio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Reduto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Resende Costa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Resplendor"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ressaquinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Riachinho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Riacho dos Machados"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ribeirão das Neves"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ribeirão Vermelho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Acima"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Casca"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Doce"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio do Prado"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Espera"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Manso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Novo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Paranaíba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Pardo de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Piracicaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Pomba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rio Vermelho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ritápolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rochedo de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rodeiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Romaria"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rosário da Limeira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rubelita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Rubim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sabará"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sabinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sacramento"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Salinas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Salto da Divisa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Bárbara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Bárbara do Leste"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Bárbara do Monte Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Bárbara do Tugúrio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Cruz de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Cruz de Salinas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Cruz do Escalvado"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Efigênia de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Fé de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Helena de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Juliana"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Luzia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Margarida"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Maria de Itabira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Maria do Salto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Maria do Suaçuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana da Vargem"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana de Cataguases"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana de Pirapama"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana do Deserto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana do Garambéu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana do Jacaré"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana do Manhuaçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana do Riacho"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santana dos Montes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rita de Caldas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rita de Jacutinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rita de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rita de Ibitipoca"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rita do Itueto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rita do Sapucaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Rosa da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santa Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Amparo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Aventureiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Grama"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Itambé"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Jacinto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Monte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Retiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Antônio do Rio Abaixo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santo Hipólito"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Santos Dumont"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Bento Abade"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Brás do Suaçuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Domingos das Dores"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Domingos do Prata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Félix de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Francisco de Paula"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Francisco de Sales"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Francisco do Glória"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Geraldo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Geraldo da Piedade"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Geraldo do Baixio"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Gonçalo do Abaeté"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Gonçalo do Pará"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Gonçalo do Rio Abaixo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Gonçalo do Sapucaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Gotardo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João Batista do Glória"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João da Lagoa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João da Mata"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João da Ponte"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João Del Rei"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João do Manhuaçu"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João do Manteninha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João do Oriente"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João do Pacuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João Evangelista"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São João Nepomuceno"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Joaquim de Bicas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José da Barra"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José da Lapa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José da Safira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José da Varginha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José do Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José do Divino"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José do Goiabal"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José do Jacuri"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São José do Mantimento"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Lourenço"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Miguel do Anta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Pedro da União"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Pedro dos Ferros"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Pedro do Suaçuí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Romão"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Roque de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião da Bela Vista"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião da Vargem Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião do Anta"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião do Maranhão"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Sebastião do Rio Verde"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Tiago"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Tomás de Aquino"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Thomé das Letras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "São Vicente de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sapucaí-Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sardoá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sarzedo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Setubinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sem-Peixe"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senador Amaral"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senador Cortes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senador Firmino"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senador José Bento"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senador Modestino Gonçalves"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senhora de Oliveira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senhora do Porto"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Senhora dos Remédios"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sericita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Seritinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serra Azul de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serra da Saudade"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serra dos Aimorés"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serra do Salitre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serrania"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serranópolis de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serranos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Serro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sete Lagoas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Silveirânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Silvianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Simão Pereira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Simonésia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Sobrália"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Soledade de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tabuleiro"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Taiobeiras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Taparuba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tapira"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tapiraí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Taquaraçu de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tarumirim"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Teixeiras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Teófilo Otoni"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Timóteo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tiradentes"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tiros"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tocantins"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tocos do Moji"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Toledo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tombos"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Três Corações"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Três Marias"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Três Pontas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tumiritinga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Tupaciguara"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Turmalina"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Turvolândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ubá"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ubaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Ubaporanga"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Uberaba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Uberlândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Umburatiba"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Unaí"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "União de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Uruana de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Urucânia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Urucuia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vargem Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vargem Bonita"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vargem Grande do Rio Pardo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Varginha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Varjão de Minas"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Várzea da Palma"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Varzelândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vazante"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Verdelândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Veredinha"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Veríssimo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vermelho Novo"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vespasiano"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Viçosa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Vieiras"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Mathias Lobato"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Virgem da Lapa"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Virgínia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Virginópolis"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Virgolândia"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Visconde do Rio Branco"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Volta Grande"
          ]);
                $this->city->create([
                    "state_id"=> 11,
            "name"=> "Wenceslau Braz"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Afonso Cláudio"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Águia Branca"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Água Doce do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Alfredo Chaves"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Alto Rio Novo"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Anchieta"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Apiacá"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Aracruz"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Atilio Vivacqua"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Baixo Guandu"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Barra de São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Boa Esperança"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Bom Jesus do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Brejetuba"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Cachoeiro de Itapemirim"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Cariacica"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Castelo"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Colatina"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Conceição da Barra"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Conceição do Castelo"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Divino de São Lourenço"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Domingos Martins"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Dores do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Ecoporanga"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Fundão"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Governador Lindenberg"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Guaçuí"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Guarapari"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Ibatiba"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Ibiraçu"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Ibitirama"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Iconha"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Irupi"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Itaguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Itapemirim"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Itarana"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Iúna"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Jaguaré"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Jerônimo Monteiro"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "João Neiva"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Laranja da Terra"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Linhares"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Mantenópolis"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Marataízes"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Marechal Floriano"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Marilândia"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Mimoso do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Montanha"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Mucurici"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Muniz Freire"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Muqui"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Nova Venécia"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Pancas"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Pedro Canário"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Pinheiros"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Piúma"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Ponto Belo"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Presidente Kennedy"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Rio Bananal"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Rio Novo do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Santa Leopoldina"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Santa Maria de Jetibá"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Santa Teresa"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "São Domingos do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "São Gabriel da Palha"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "São José do Calçado"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "São Mateus"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "São Roque do Canaã"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Serra"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Sooretama"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Vargem Alta"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Venda Nova do Imigrante"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Viana"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Vila Pavão"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Vila Valério"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Vila Velha"
          ]);
                $this->city->create([
                    "state_id"=> 8,
            "name"=> "Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Angra dos Reis"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Aperibé"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Araruama"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Areal"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Armação dos Búzios"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Arraial do Cabo"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Barra do Piraí"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Barra Mansa"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Belford Roxo"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Bom Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Bom Jesus do Itabapoana"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Cabo Frio"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Cachoeiras de Macacu"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Cambuci"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Carapebus"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Comendador Levy Gasparian"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Campos dos Goytacazes"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Cantagalo"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Cardoso Moreira"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Carmo"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Casimiro de Abreu"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Conceição de Macabu"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Cordeiro"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Duas Barras"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Duque de Caxias"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Engenheiro Paulo de Frontin"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Guapimirim"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Iguaba Grande"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Itaboraí"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Itaguaí"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Italva"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Itaocara"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Itaperuna"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Itatiaia"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Japeri"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Laje do Muriaé"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Macaé"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Macuco"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Magé"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Mangaratiba"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Maricá"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Mendes"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Mesquita"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Miguel Pereira"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Miracema"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Natividade"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Nilópolis"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Niterói"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Nova Friburgo"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Nova Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Paracambi"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Paraíba do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Paraty"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Paty do Alferes"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Petrópolis"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Pinheiral"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Piraí"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Porciúncula"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Porto Real"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Quatis"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Queimados"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Quissamã"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Resende"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Rio Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Rio Claro"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Rio das Flores"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Rio das Ostras"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Rio de Janeiro"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Santa Maria Madalena"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Santo Antônio de Pádua"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São Francisco de Itabapoana"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São Fidélis"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São Gonçalo"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São João da Barra"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São João de Meriti"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São José de Ubá"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São José do Vale do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São Pedro da Aldeia"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "São Sebastião do Alto"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Sapucaia"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Saquarema"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Seropédica"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Silva Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Sumidouro"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Tanguá"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Teresópolis"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Trajano de Morais"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Três Rios"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Valença"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Varre-Sai"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Vassouras"
          ]);
                $this->city->create([
                    "state_id"=> 19,
            "name"=> "Volta Redonda"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Adamantina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Adolfo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Aguaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Águas da Prata"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Águas de Lindóia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Águas de Santa Bárbara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Águas de São Pedro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Agudos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Alambari"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Alfredo Marcondes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Altair"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Altinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Alto Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Alumínio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Álvares Florence"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Álvares Machado"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Álvaro de Carvalho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Alvinlândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Americana"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Américo Brasiliense"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Américo de Campos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Amparo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Analândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Andradina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Angatuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Anhembi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Anhumas"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Aparecida"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Aparecida D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Apiaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Araçariguama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Araçatuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Araçoiaba da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Aramina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Arandu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Arapeí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Araraquara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Araras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Arco-Íris"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Arealva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Areias"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Areiópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ariranha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Artur Nogueira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Arujá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Aspásia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Assis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Atibaia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Auriflama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Avaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Avanhandava"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Avaré"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bady Bassitt"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Balbinos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bálsamo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bananal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barão de Antonina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barbosa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bariri"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barra Bonita"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barra do Chapéu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barra do Turvo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barretos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barrinha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Barueri"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bastos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Batatais"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bauru"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bebedouro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bento de Abreu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bernardino de Campos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bertioga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bilac"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Birigui"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Biritiba-Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Boa Esperança do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bocaina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bofete"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Boituva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bom Jesus dos Perdões"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bom Sucesso de Itararé"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Borá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Boracéia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Borborema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Borebi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Botucatu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Bragança Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Braúna"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Brejo Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Brodowski"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Brotas"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Buri"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Buritama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Buritizal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cabrália Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cabreúva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Caçapava"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cachoeira Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Caconde"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cafelândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Caiabu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Caieiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Caiuá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cajamar"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cajati"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cajobi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cajuru"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Campina do Monte Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Campinas"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Campo Limpo Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Campos do Jordão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Campos Novos Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cananéia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Canas"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cândido Mota"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cândido Rodrigues"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Canitar"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Capão Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Capela do Alto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Capivari"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Caraguatatuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Carapicuíba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cardoso"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Casa Branca"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cássia dos Coqueiros"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Castilho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Catanduva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Catiguá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cedral"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cerqueira César"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cerquilho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cesário Lange"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Charqueada"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Clementina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Colina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Colômbia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Conchal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Conchas"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cordeirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Coroados"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Coronel Macedo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Corumbataí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cosmópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cosmorama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cotia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cravinhos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cristais Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cruzália"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cruzeiro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cubatão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Cunha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Descalvado"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Diadema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dirce Reis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Divinolândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dobrada"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dois Córregos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dolcinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dourado"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dracena"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Duartina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Dumont"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Echaporã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Eldorado"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Elias Fausto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Elisiário"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Embaúba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Embu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Embu-Guaçu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Emilianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Engenheiro Coelho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Espírito Santo do Pinhal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Espírito Santo do Turvo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Estrela D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Estrela do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Euclides da Cunha Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Fartura"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Fernandópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Fernando Prestes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Fernão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ferraz de Vasconcelos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Flora Rica"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Floreal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Flórida Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Florínia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Franca"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Francisco Morato"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Franco da Rocha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Gabriel Monteiro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Gália"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Garça"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Gastão Vidigal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Gavião Peixoto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "General Salgado"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Getulina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Glicério"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guaiçara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guaimbê"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guaíra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guapiaçu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guapiara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guará"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guaraçaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guaraci"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guarani D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guarantã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guararapes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guararema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guaratinguetá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guareí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guariba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guarujá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guarulhos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guatapará"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Guzolândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Herculândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Holambra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Hortolândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iacanga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iacri"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iaras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ibaté"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ibirá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ibirarema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ibitinga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ibiúna"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Icém"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iepê"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Igaraçu do Tietê"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Igarapava"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Igaratá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iguape"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ilhabela"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ilha Comprida"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ilha Solteira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Indaiatuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Indiana"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Indiaporã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Inúbia Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ipaussu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iperó"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ipeúna"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ipiguá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iporanga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ipuã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Iracemápolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Irapuã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Irapuru"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itaberá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itajobi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itaju"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itanhaém"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itaóca"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapecerica da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapetininga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapeva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapevi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapirapuã Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itápolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itaporanga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapuí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itapura"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itaquaquecetuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itararé"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itariri"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itatiba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itatinga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itirapina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itirapuã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itobi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Itupeva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ituverava"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jaborandi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jaboticabal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jacareí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jaci"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jacupiranga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jaguariúna"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jales"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jambeiro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jandira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jardinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jarinu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jaú"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jeriquara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Joanópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "João Ramalho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "José Bonifácio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Júlio Mesquita"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jumirim"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Jundiaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Junqueirópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Juquiá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Juquitiba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lagoinha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Laranjal Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lavínia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lavrinhas"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Leme"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lençóis Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Limeira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lindóia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lins"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lorena"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lourdes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Louveira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lucélia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lucianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Luís Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Luiziânia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lupércio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Lutécia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Macatuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Macaubal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Macedônia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Magda"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mairinque"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mairiporã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Manduri"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Marabá Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Maracaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Marapoama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mariápolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Marília"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Marinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Martinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Matão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mauá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mendonça"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Meridiano"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mesópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Miguelópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mineiros do Tietê"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Miracatu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mira Estrela"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mirandópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mirante do Paranapanema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mirassol"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mirassolândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mococa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mogi das Cruzes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mogi Guaçu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mogi Mirim"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mombuca"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monções"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Mongaguá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monte Alegre do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monte Alto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monte Aprazível"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monte Azul Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monte Castelo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monteiro Lobato"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Monte Mor"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Morro Agudo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Morungaba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Motuca"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Murutinga do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nantes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Narandiba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Natividade da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nazaré Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Neves Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nhandeara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nipoã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Aliança"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Campina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Canaã Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Castilho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Europa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Granada"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Guataporanga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Independência"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Novais"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Luzitânia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nova Odessa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Novo Horizonte"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Nuporanga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ocauçu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Óleo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Olímpia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Onda Verde"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Oriente"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Orindiúva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Orlândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Osasco"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Oscar Bressane"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Osvaldo Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ourinhos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ouroeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ouro Verde"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pacaembu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Palestina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Palmares Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Palmeira D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Palmital"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Panorama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paraguaçu Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paraibuna"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paranapanema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paranapuã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Parapuã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pardinho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pariquera-Açu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Parisi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Patrocínio Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paulicéia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paulínia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paulistânia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Paulo de Faria"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pederneiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pedra Bela"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pedranópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pedregulho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pedreira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pedrinhas Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pedro de Toledo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Penápolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pereira Barreto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pereiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Peruíbe"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piacatu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piedade"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pilar do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pindamonhangaba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pindorama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pinhalzinho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piquerobi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piquete"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piracaia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piracicaba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piraju"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pirajuí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pirangi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pirapora do Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pirapozinho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pirassununga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Piratininga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pitangueiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Planalto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Platina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Poá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Poloni"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pompéia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pongaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pontal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pontalinda"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pontes Gestal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Populina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Porangaba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Porto Feliz"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Porto Ferreira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Potim"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Potirendaba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pracinha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pradópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Praia Grande"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Pratânia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Presidente Alves"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Presidente Bernardes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Presidente Epitácio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Presidente Prudente"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Presidente Venceslau"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Promissão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Quadra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Quatá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Queiroz"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Queluz"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Quintana"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rafard"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rancharia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Redenção da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Regente Feijó"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Reginópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Registro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Restinga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão Branco"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão Corrente"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão dos Índios"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão Grande"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão Pires"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ribeirão Preto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Riversul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rifaina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rincão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rio Claro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rio das Pedras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rio Grande da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Riolândia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rosana"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Roseira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rubiácea"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Rubinéia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sabino"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sagres"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sales"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sales Oliveira"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Salesópolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Salmourão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Saltinho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Salto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Salto de Pirapora"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Salto Grande"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sandovalina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Adélia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Albertina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Bárbara D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Branca"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Clara D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Cruz da Conceição"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Cruz da Esperança"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Cruz das Palmeiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Cruz do Rio Pardo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Ernestina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Fé do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Gertrudes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Isabel"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Lúcia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Maria da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Mercedes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santana da Ponte Pensa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santana de Parnaíba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Rita D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Rita do Passa Quatro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Rosa de Viterbo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santa Salete"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Anastácio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo André"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Antônio da Alegria"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Antônio de Posse"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Antônio do Aracanguá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Antônio do Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Antônio do Pinhal"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santo Expedito"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santópolis do Aguapeí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Santos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Bento do Sapucaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Bernardo do Campo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Caetano do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Carlos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Francisco"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São João da Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São João das Duas Pontes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São João de Iracema"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São João do Pau D'alho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Joaquim da Barra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São José da Bela Vista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São José do Barreiro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São José do Rio Pardo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São José do Rio Preto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São José dos Campos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Lourenço da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Luís do Paraitinga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Manuel"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Miguel Arcanjo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Paulo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Pedro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Pedro do Turvo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Roque"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Sebastião"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Sebastião da Grama"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Simão"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "São Vicente"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sarapuí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sarutaiá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sebastianópolis do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Serra Azul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Serrana"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Serra Negra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sertãozinho"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sete Barras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Severínia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Silveiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Socorro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sorocaba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sud Mennucci"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Sumaré"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Suzano"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Suzanápolis"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tabapuã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tabatinga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taboão da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taciba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taguaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taiaçu"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taiúva"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tambaú"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tanabi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tapiraí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tapiratiba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taquaral"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taquaritinga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taquarituba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taquarivaí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tarabai"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tarumã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tatuí"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Taubaté"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tejupá"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Teodoro Sampaio"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Terra Roxa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tietê"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Timburi"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Torre de Pedra"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Torrinha"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Trabiju"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tremembé"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Três Fronteiras"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tuiuti"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tupã"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Tupi Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Turiúba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Turmalina"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ubarana"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ubatuba"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Ubirajara"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Uchoa"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "União Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Urânia"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Uru"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Urupês"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Valentim Gentil"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Valinhos"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Valparaíso"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vargem"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vargem Grande do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vargem Grande Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Várzea Paulista"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vera Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vinhedo"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Viradouro"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vista Alegre do Alto"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Vitória Brasil"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Votorantim"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Votuporanga"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Zacarias"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Chavantes"
          ]);
                $this->city->create([
                    "state_id"=> 26,
            "name"=> "Estiva Gerbi"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Abatiá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Adrianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Agudos do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Almirante Tamandaré"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Altamira do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Altônia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Alto Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Alto Piquiri"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Alvorada do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Amaporã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ampére"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Anahy"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Andirá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ângulo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Antonina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Antônio Olinto"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Apucarana"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Arapongas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Arapoti"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Arapuã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Araruna"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Araucária"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ariranha do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Assaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Assis Chateaubriand"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Astorga"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Atalaia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Balsa Nova"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bandeirantes"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Barbosa Ferraz"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Barracão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Barra do Jacaré"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bela Vista da Caroba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bela Vista do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bituruna"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Boa Esperança"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Boa Esperança do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Boa Ventura de São Roque"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Boa Vista da Aparecida"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bocaiúva do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bom Jesus do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bom Sucesso"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Bom Sucesso do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Borrazópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Braganey"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Brasilândia do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cafeara"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cafelândia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cafezal do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Califórnia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cambará"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cambé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cambira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campina da Lagoa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campina do Simão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campina Grande do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campo Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campo do Tenente"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campo Largo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campo Magro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Campo Mourão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cândido de Abreu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Candói"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cantagalo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Capanema"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Capitão Leônidas Marques"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Carambeí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Carlópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cascavel"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Castro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Catanduvas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Centenário do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cerro Azul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Céu Azul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Chopinzinho"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cianorte"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cidade Gaúcha"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Clevelândia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Colombo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Colorado"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Congonhinhas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Conselheiro Mairinck"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Contenda"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Corbélia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cornélio Procópio"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Coronel Domingos Soares"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Coronel Vivida"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Corumbataí do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cruzeiro do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cruzeiro do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cruzeiro do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cruz Machado"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Cruzmaltina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Curitiba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Curiúva"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Diamante do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Diamante do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Diamante D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Dois Vizinhos"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Douradina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Doutor Camargo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Enéas Marques"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Engenheiro Beltrão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Esperança Nova"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Entre Rios do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Espigão Alto do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Farol"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Faxinal"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Fazenda Rio Grande"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Fênix"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Fernandes Pinheiro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Figueira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Floraí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Flor da Serra do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Floresta"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Florestópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Flórida"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Formosa do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Foz do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Francisco Alves"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Francisco Beltrão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Foz do Jordão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "General Carneiro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Godoy Moreira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Goioerê"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Goioxim"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Grandes Rios"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guaíra"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guairaçá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guamiranga"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guapirama"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guaporema"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guaraci"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guaraniaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guarapuava"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guaraqueçaba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Guaratuba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Honório Serpa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ibaiti"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ibema"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ibiporã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Icaraíma"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Iguaraçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Iguatu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Imbaú"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Imbituva"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Inácio Martins"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Inajá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Indianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ipiranga"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Iporã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Iracema do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Irati"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Iretama"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itaguajé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itaipulândia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itambaracá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itambé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itapejara D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itaperuçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Itaúna do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ivaiporã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ivaté"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ivatuba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jaboti"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jacarezinho"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jaguapitã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jaguariaíva"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jandaia do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Janiópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Japira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Japurá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jardim Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jardim Olinda"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jataizinho"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jesuítas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Joaquim Távora"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jundiaí do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Juranda"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Jussara"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Kaloré"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Lapa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Laranjal"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Laranjeiras do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Leópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Lidianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Lindoeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Loanda"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Lobato"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Londrina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Luiziana"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Lunardelli"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Lupionópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mallet"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mamborê"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mandaguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mandaguari"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mandirituba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Manfrinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mangueirinha"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Manoel Ribas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marechal Cândido Rondon"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Maria Helena"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marialva"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marilândia do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marilena"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mariluz"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Maringá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mariópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Maripá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marmeleiro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marquinho"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Marumbi"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Matelândia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Matinhos"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mato Rico"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mauá da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Medianeira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mercedes"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Mirador"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Miraselva"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Missal"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Moreira Sales"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Morretes"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Munhoz de Melo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nossa Senhora das Graças"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Aliança do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova América da Colina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Aurora"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Cantu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Esperança"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Esperança do Sudoeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Fátima"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Laranjeiras"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Londrina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Olímpia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Santa Bárbara"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Santa Rosa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Prata do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Nova Tebas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Novo Itacolomi"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ortigueira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ourizona"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ouro Verde do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paiçandu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Palmas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Palmeira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Palmital"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Palotina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paraíso do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Parana       city"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paranaguá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paranapoema"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paranavaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pato Bragado"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pato Branco"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paula Freitas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Paulo Frontin"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Peabiru"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Perobal"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pérola"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pérola D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Piên"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pinhais"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pinhalão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pinhal de São Bento"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pinhão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Piraí do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Piraquara"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pitanga"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pitangueiras"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Planaltina do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Planalto"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ponta Grossa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pontal do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Porecatu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Porto Amazonas"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Porto Barreiro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Porto Rico"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Porto Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Prado Ferreira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Pranchita"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Presidente Castelo Branco"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Primeiro de Maio"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Prudentópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quarto Centenário"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quatiguá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quatro Barras"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quatro Pontes"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quedas do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Querência do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quinta do Sol"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Quitandinha"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ramilândia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rancho Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rancho Alegre D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Realeza"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rebouças"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Renascença"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Reserva"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Reserva do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ribeirão Claro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ribeirão do Pinhal"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rio Azul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rio Bom"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rio Bonito do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rio Branco do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rio Branco do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rio Negro"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rolândia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Roncador"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rondon"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Rosário do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sabáudia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Salgado Filho"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Salto do Itararé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Salto do Lontra"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Amélia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Cecília do Pavão"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Cruz de Monte Castelo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Fé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Helena"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Inês"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Isabel do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Izabel do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Lúcia"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Maria do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Mariana"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Mônica"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santana do Itararé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Tereza do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santa Terezinha de Itaipu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santo Antônio da Platina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santo Antônio do Caiuá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santo Antônio do Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santo Antônio do Sudoeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Santo Inácio"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Carlos do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Jerônimo da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São João"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São João do Caiuá"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São João do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São João do Triunfo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Jorge D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Jorge do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Jorge do Patrocínio"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São José da Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São José das Palmeiras"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São José dos Pinhais"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Manoel do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Mateus do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Miguel do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Pedro do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Pedro do Ivaí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Pedro do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Sebastião da Amoreira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "São Tomé"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sapopema"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sarandi"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Saudade do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sengés"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Serranópolis do Iguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sertaneja"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sertanópolis"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Siqueira Campos"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Sulina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tamarana"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tamboara"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tapejara"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tapira"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Teixeira Soares"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Telêmaco Borba"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Terra Boa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Terra Rica"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Terra Roxa"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tibagi"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tijucas do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Toledo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tomazina"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Três Barras do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tunas do Paraná"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tuneiras do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Tupãssi"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Turvo"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ubiratã"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Umuarama"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "União da Vitória"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Uniflor"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Uraí"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Wenceslau Braz"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Ventania"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Vera Cruz do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Verê"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Alto Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Doutor Ulysses"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Virmond"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Vitorino"
          ]);
                $this->city->create([
                    "state_id"=> 18,
            "name"=> "Xambrê"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Abdon Batista"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Abelardo Luz"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Agrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Agronômica"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Água Doce"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Águas de Chapecó"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Águas Frias"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Águas Mornas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Alfredo Wagner"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Alto Bela Vista"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Anchieta"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Angelina"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Anita Garibaldi"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Anitápolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Antônio Carlos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Apiúna"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Arabutã"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Araquari"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Araranguá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Armazém"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Arroio Trinta"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Arvoredo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ascurra"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Atalanta"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Aurora"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Balneário Arroio do Silva"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Balneário Camboriú"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Balneário Barra do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Balneário Gaivota"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bandeirante"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Barra Bonita"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Barra Velha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bela Vista do Toldo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Belmonte"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Benedito Novo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Biguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Blumenau"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bocaina do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bombinhas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bom Jardim da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bom Jesus do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Bom Retiro"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Botuverá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Braço do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Braço do Trombudo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Brunópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Brusque"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Caçador"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Caibi"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Calmon"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Camboriú"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Capão Alto"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Campo Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Campo Belo do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Campo Erê"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Campos Novos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Canelinha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Canoinhas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Capinzal"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Capivari de Baixo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Catanduvas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Caxambu do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Celso Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Cerro Negro"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Chapadão do Lageado"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Chapecó"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Cocal do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Concórdia"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Cordilheira Alta"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Coronel Freitas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Coronel Martins"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Corupá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Correia Pinto"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Criciúma"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Cunha Porã"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Cunhataí"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Curitibanos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Descanso"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Dionísio Cerqueira"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Dona Emma"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Doutor Pedrinho"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Entre Rios"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ermo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Erval Velho"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Faxinal dos Guedes"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Flor do Sertão"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Florianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Formosa do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Forquilhinha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Fraiburgo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Frei Rogério"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Galvão"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Garopaba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Garuva"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Gaspar"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Governador Celso Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Grão Pará"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Gravatal"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Guabiruba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Guaraciaba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Guaramirim"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Guarujá do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Guatambú"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Herval D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ibiam"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ibicaré"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ibirama"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Içara"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ilhota"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Imaruí"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Imbituba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Imbuia"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Indaial"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Iomerê"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ipira"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Iporã do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ipuaçu"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ipumirim"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Iraceminha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Irani"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Irati"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Irineópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Itá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Itaiópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Itajaí"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Itapema"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Itapiranga"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Itapoá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ituporanga"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Jaborá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Jacinto Machado"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Jaguaruna"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Jaraguá do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Jardinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Joaçaba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Joinville"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "José Boiteux"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Jupiá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lacerdópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lages"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Laguna"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lajeado Grande"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Laurentino"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lauro Muller"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lebon Régis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Leoberto Leal"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lindóia do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Lontras"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Luiz Alves"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Luzerna"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Macieira"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Mafra"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Major Gercino"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Major Vieira"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Maracajá"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Maravilha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Marema"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Massaranduba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Matos Costa"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Meleiro"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Mirim Doce"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Modelo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Mondaí"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Monte Carlo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Monte Castelo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Morro da Fumaça"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Morro Grande"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Navegantes"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Nova Erechim"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Nova Itaberaba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Nova Trento"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Nova Veneza"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Novo Horizonte"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Orleans"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Otacílio Costa"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ouro"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ouro Verde"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Paial"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "panel"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Palhoça"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Palma Sola"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Palmeira"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Palmitos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Papanduva"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Paraíso"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Passo de Torres"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Passos Maia"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Paulo Lopes"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Pedras Grandes"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Penha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Peritiba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Petrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Balneário Piçarras"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Pinhalzinho"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Pinheiro Preto"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Piratuba"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Planalto Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Pomerode"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ponte Alta"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ponte Alta do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Ponte Serrada"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Porto Belo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Porto União"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Pouso Redondo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Praia Grande"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Presidente Castello Branco"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Presidente Getúlio"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Presidente Nereu"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Princesa"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Quilombo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rancho Queimado"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio das Antas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio do Campo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio dos Cedros"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio Fortuna"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio Negrinho"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rio Rufino"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Riqueza"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Rodeio"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Romelândia"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Salete"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Saltinho"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Salto Veloso"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Sangão"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santa Cecília"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santa Helena"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santa Rosa de Lima"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santa Rosa do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santa Terezinha"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santa Terezinha do Progresso"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santiago do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Santo Amaro da Imperatriz"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Bernardino"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Bento do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Bonifácio"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Carlos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Cristovão do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Domingos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Francisco do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São João do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São João Batista"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São João do Itaperiú"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São João do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Joaquim"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São José"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São José do Cedro"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São José do Cerrito"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Lourenço do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Ludgero"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Martinho"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Miguel da Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Miguel do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "São Pedro de Alcântara"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Saudades"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Schroeder"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Seara"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Serra Alta"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Siderópolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Sombrio"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Sul Brasil"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Taió"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Tangará"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Tigrinhos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Tijucas"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Timbé do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Timbó"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Timbó Grande"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Três Barras"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Treviso"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Treze de Maio"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Treze Tílias"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Trombudo Central"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Tubarão"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Tunápolis"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Turvo"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "União do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Urubici"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Urupema"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Urussanga"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Vargeão"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Vargem"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Vargem Bonita"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Vidal Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Videira"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Vitor Meireles"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Witmarsum"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Xanxerê"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Xavantina"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Xaxim"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Zortéa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Aceguá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Água Santa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Agudo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ajuricaba"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alecrim"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alegrete"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alegria"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Almirante Tamandaré do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alpestre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alto Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alto Feliz"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Alvorada"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Amaral Ferrador"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ametista do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "André da Rocha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Anta Gorda"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Antônio Prado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arambaré"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Araricá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Aratiba"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arroio do Meio"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arroio do Sal"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arroio do Padre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arroio dos Ratos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arroio do Tigre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arroio Grande"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Arvorezinha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Augusto Pestana"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Áurea"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bagé"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Balneário Pinhal"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barão de Cotegipe"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barão do Triunfo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barracão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barra do Guarita"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barra do Quaraí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barra do Ribeiro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barra do Rio Azul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barra Funda"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Barros Cassal"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Benjamin Constant do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bento Gonçalves"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Boa Vista das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Boa Vista do Buricá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Boa Vista do Cadeado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Boa Vista do Incra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Boa Vista do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bom Jesus"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bom Princípio"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bom Progresso"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bom Retiro do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Boqueirão do Leão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bossoroca"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Bozano"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Braga"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Brochier"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Butiá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Caçapava do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cacequi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cachoeira do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cachoeirinha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cacique Doble"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Caibaté"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Caiçara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Camaquã"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Camargo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cambará do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Campestre da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Campina das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Campinas do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Campo Bom"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Campo Novo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Campos Borges"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Candelária"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cândido Godói"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Candiota"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Canela"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Canguçu"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Canoas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Canudos do Vale"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capão Bonito do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capão da Canoa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capão do Cipó"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capão do Leão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capivari do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capela de Santana"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Capitão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Carazinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Caraá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Carlos Barbosa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Carlos Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Casca"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Caseiros"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Catuípe"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Caxias do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Centenário"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cerrito"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cerro Branco"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cerro Grande"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cerro Grande do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cerro Largo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Chapada"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Charqueadas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Charrua"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Chiapetta"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Chuí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Chuvisca"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cidreira"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ciríaco"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Colinas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Colorado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Condor"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Constantina"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Coqueiro Baixo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Coqueiros do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Coronel Barros"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Coronel Bicaco"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Coronel Pilar"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cotiporã"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Coxilha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Crissiumal"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cristal"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cristal do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cruz Alta"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cruzaltense"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Cruzeiro do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "David Canabarro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Derrubadas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dezesseis de Novembro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dilermando de Aguiar"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dois Irmãos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dois Irmãos das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dois Lajeados"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dom Feliciano"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dom Pedro de Alcântara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dom Pedrito"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Dona Francisca"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Doutor Maurício Cardoso"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Doutor Ricardo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Eldorado do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Encantado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Encruzilhada do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Engenho Velho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Entre-Ijuís"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Entre Rios do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Erebango"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Erechim"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ernestina"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Herval"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Erval Grande"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Erval Seco"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Esmeralda"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Esperança do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Espumoso"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Estação"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Estância Velha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Esteio"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Estrela"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Estrela Velha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Eugênio de Castro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Fagundes Varela"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Farroupilha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Faxinal do Soturno"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Faxinalzinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Fazenda Vilanova"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Feliz"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Flores da Cunha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Floriano Peixoto"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Fontoura Xavier"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Formigueiro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Forquetinha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Fortaleza dos Valos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Frederico Westphalen"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Garibaldi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Garruchos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Gaurama"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "General Câmara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Gentil"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Getúlio Vargas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Giruá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Glorinha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Gramado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Gramado dos Loureiros"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Gramado Xavier"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Gravataí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Guabiju"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Guaíba"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Guaporé"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Guarani das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Harmonia"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Herveiras"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Horizontina"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Hulha Negra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Humaitá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ibarama"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ibiaçá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ibiraiaras"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ibirapuitã"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ibirubá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Igrejinha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ijuí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ilópolis"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Imbé"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Imigrante"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Independência"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Inhacorá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ipê"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ipiranga do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Iraí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Itaara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Itacurubi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Itapuca"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Itaqui"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Itati"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Itatiba do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ivorá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ivoti"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jaboticaba"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jacuizinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jacutinga"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jaguarão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jaguari"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jaquirana"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jari"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Jóia"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Júlio de Castilhos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lagoa Bonita do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lagoão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lagoa dos Três Cantos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lagoa Vermelha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lajeado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lajeado do Bugre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lavras do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Liberato Salzano"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Lindolfo Collor"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Linha Nova"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Machadinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Maçambara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mampituba"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Manoel Viana"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Maquiné"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Maratá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Marau"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Marcelino Ramos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mariana Pimentel"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mariano Moro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Marques de Souza"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mata"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mato Castelhano"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mato Leitão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mato Queimado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Maximiliano de Almeida"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Minas do Leão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Miraguaí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Montauri"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Monte Alegre dos Campos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Monte Belo do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Montenegro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mormaço"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Morrinhos do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Morro Redondo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Morro Reuter"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Mostardas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Muçum"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Muitos Capões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Muliterno"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Não-Me-Toque"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nicolau Vergueiro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nonoai"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Alvorada"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Araçá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Bassano"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Bréscia"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Candelária"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Esperança do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Hartz"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Pádua"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Palma"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Petrópolis"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Prata"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Ramada"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Roma do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Nova Santa Rita"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Novo Cabrais"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Novo Hamburgo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Novo Machado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Novo Tiradentes"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Novo Xingu"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Novo Barreiro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Osório"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Paim Filho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Palmares do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Palmeira das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Palmitinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Panambi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pantano Grande"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Paraí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Paraíso do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pareci Novo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Parobé"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Passa Sete"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Passo do Sobrado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Passo Fundo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Paulo Bento"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Paverama"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pedras Altas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pedro Osório"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pejuçara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pelotas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Picada Café"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pinhal"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pinhal da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pinhal Grande"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pinheirinho do Vale"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pinheiro Machado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pirapó"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Piratini"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Planalto"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Poço das Antas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pontão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ponte Preta"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Portão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Porto Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Porto Lucena"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Porto Mauá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Porto Vera Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Porto Xavier"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pouso Novo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Presidente Lucena"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Progresso"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Protásio Alves"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Putinga"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Quaraí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Quatro Irmãos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Quevedos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Quinze de Novembro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Redentora"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Relvado"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Restinga Seca"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rio dos Índios"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rio Grande"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rio Pardo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Riozinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Roca Sales"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rodeio Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rolador"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rolante"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ronda Alta"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rondinha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Roque Gonzales"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Rosário do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sagrada Família"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Saldanha Marinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Salto do Jacuí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Salvador das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Salvador do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sananduva"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Bárbara do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Cecília do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Clara do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Cruz do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Maria"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Maria do Herval"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Margarida do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santana da Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santana do Livramento"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Rosa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Tereza"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santa Vitória do Palmar"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santiago"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Ângelo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Antônio do Palma"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Antônio da Patrulha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Antônio das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Antônio do Planalto"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Augusto"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Cristo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Santo Expedito do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Borja"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Domingos do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Francisco de Assis"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Francisco de Paula"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Gabriel"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Jerônimo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São João da Urtiga"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São João do Polêsine"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Jorge"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José do Herval"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José do Hortêncio"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José do Inhacorá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José do Ouro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São José dos Ausentes"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Leopoldo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Lourenço do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Luiz Gonzaga"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Marcos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Martinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Martinho da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Miguel das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Nicolau"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Paulo das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Pedro da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Pedro das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Pedro do Butiá"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Pedro do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Sebastião do Caí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Sepé"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Valentim"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Valentim do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Valério do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Vendelino"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "São Vicente do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sapiranga"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sapucaia do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sarandi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Seberi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sede Nova"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Segredo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Selbach"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Senador Salgado Filho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sentinela do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Serafina Corrêa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sério"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sertão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sertão Santana"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sete de Setembro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Severiano de Almeida"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Silveira Martins"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sinimbu"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Sobradinho"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Soledade"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tabaí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tapejara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tapera"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tapes"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Taquara"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Taquari"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Taquaruçu do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tavares"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tenente Portela"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Terra de Areia"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Teutônia"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tio Hugo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tiradentes do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Toropi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Torres"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tramandaí"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Travesseiro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três Arroios"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três Cachoeiras"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três Coroas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três de Maio"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três Forquilhas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três Palmeiras"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Três Passos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Trindade do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Triunfo"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tucunduva"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tunas"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tupanci do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tupanciretã"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tupandi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Tuparendi"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Turuçu"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Ubiretama"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "União da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Unistalda"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Uruguaiana"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vacaria"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vale Verde"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vale do Sol"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vale Real"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vanini"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Venâncio Aires"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vera Cruz"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Veranópolis"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vespasiano Correa"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Viadutos"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Viamão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vicente Dutra"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Victor Graeff"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vila Flores"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vila Lângaro"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vila Maria"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vila Nova do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vista Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vista Alegre do Prata"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vista Gaúcha"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Vitória das Missões"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Westfalia"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Xangri-Lá"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Água Clara"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Alcinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Amambaí"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Anastácio"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Anaurilândia"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Angélica"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Antônio João"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Aparecida do Taboado"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Aquidauana"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Aral Moreira"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Bandeirantes"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Bataguassu"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Batayporã"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Bela Vista"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Bodoquena"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Bonito"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Brasilândia"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Caarapó"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Camapuã"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Campo Grande"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Caracol"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Cassilândia"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Chapadão do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Corguinho"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Coronel Sapucaia"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Corumbá"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Costa Rica"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Coxim"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Deodápolis"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Dois Irmãos do Buriti"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Douradina"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Dourados"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Eldorado"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Fátima do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Figueirão"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Glória de Dourados"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Guia Lopes da Laguna"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Iguatemi"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Inocência"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Itaporã"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Itaquiraí"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Ivinhema"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Japorã"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Jaraguari"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Jardim"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Jateí"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Juti"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Ladário"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Laguna Carapã"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Maracaju"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Miranda"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Mundo Novo"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Naviraí"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Nioaque"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Nova Alvorada do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Nova Andradina"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Novo Horizonte do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Paranaíba"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Paranhos"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Pedro Gomes"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Ponta Porã"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Porto Murtinho"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Ribas do Rio Pardo"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Rio Brilhante"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Rio Negro"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Rio Verde de Mato Grosso"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Rochedo"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Santa Rita do Pardo"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "São Gabriel do Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Sete Quedas"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Selvíria"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Sidrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Sonora"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Tacuru"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Taquarussu"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Terenos"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Três Lagoas"
          ]);
                $this->city->create([
                    "state_id"=> 12,
            "name"=> "Vicentina"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Acorizal"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Água Boa"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Alta Floresta"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Alto Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Alto Boa Vista"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Alto Garças"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Alto Paraguai"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Alto Taquari"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Apiacás"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Araguaiana"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Araguainha"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Araputanga"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Arenápolis"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Aripuanã"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Barão de Melgaço"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Barra do Bugres"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Barra do Garças"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Bom Jesus do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Brasnorte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Cáceres"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Campinápolis"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Campo Novo do Parecis"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Campo Verde"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Campos de Júlio"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Canabrava do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Canarana"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Carlinda"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Castanheira"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Chapada dos Guimarães"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Cláudia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Cocalinho"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Colíder"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Colniza"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Comodoro"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Confresa"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Conquista D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Cotriguaçu"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Cuiabá"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Curvelândia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Denise"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Diamantino"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Dom Aquino"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Feliz Natal"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Figueirópolis D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Gaúcha do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "General Carneiro"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Glória D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Guarantã do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Guiratinga"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Indiavaí"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Ipiranga do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Itanhangá"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Itaúba"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Itiquira"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Jaciara"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Jangada"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Jauru"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Juara"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Juína"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Juruena"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Juscimeira"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Lambari D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Lucas do Rio Verde"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Luciára"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Vila Bela da Santíssima Trindade"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Marcelândia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Matupá"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Mirassol D'oeste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nobres"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nortelândia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nossa Senhora do Livramento"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Bandeirantes"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Nazaré"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Lacerda"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Santa Helena"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Brasilândia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Canaã do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Mutum"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Olímpia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Ubiratã"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Xavantina"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Novo Mundo"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Novo Horizonte do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Novo São Joaquim"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Paranaíta"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Paranatinga"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Novo Santo Antônio"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Pedra Preta"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Peixoto de Azevedo"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Planalto da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Poconé"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Pontal do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Ponte Branca"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Pontes e Lacerda"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Porto Alegre do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Porto dos Gaúchos"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Porto Esperidião"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Porto Estrela"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Poxoréo"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Primavera do Leste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Querência"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "São José dos Quatro Marcos"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Reserva do Cabaçal"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Ribeirão Cascalheira"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Ribeirãozinho"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Rio Branco"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santa Carmem"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santo Afonso"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "São José do Povo"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "São José do Rio Claro"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "São José do Xingu"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "São Pedro da Cipa"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Rondolândia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Rondonópolis"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Rosário Oeste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santa Cruz do Xingu"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Salto do Céu"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santa Rita do Trivelato"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santa Terezinha"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santo Antônio do Leste"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Santo Antônio do Leverger"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "São Félix do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Sapezal"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Serra Nova Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Sinop"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Sorriso"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Tabaporã"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Tangará da Serra"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Tapurah"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Terra Nova do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Tesouro"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Torixoréu"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "União do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Vale de São Domingos"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Várzea Grande"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Vera"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Vila Rica"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Guarita"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Marilândia"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Maringá"
          ]);
                $this->city->create([
                    "state_id"=> 13,
            "name"=> "Nova Monte Verde"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Abadia de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Abadiânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Acreúna"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Adelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Água Fria de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Água Limpa"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Águas Lindas de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Alexânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aloândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Alto Horizonte"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Alto Paraíso de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Alvorada do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Amaralina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Americano do Brasil"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Amorinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Anápolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Anhanguera"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Anicuns"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aparecida de Goiânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aparecida do Rio Doce"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aporé"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Araçu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aragarças"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aragoiânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Araguapaz"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Arenópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aruanã"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Aurilândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Avelinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Baliza"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Barro Alto"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Bela Vista de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Bom Jardim de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Bom Jesus de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Bonfinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Bonópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Brazabrantes"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Britânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Buriti Alegre"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Buriti de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Buritinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cabeceiras"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cachoeira Alta"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cachoeira de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cachoeira Dourada"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Caçu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Caiapônia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Caldas Novas"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Caldazinha"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campestre de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campinaçu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campinorte"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campo Alegre de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campo Limpo de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campos Belos"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Campos Verdes"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Carmo do Rio Verde"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Castelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Catalão"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Caturaí"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cavalcante"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Ceres"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cezarina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Chapadão do Céu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cidade Ocidental"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cocalzinho de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Colinas do Sul"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Córrego do Ouro"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Corumbá de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Corumbaíba"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cristalina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cristianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Crixás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cromínia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Cumari"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Damianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Damolândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Davinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Diorama"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Doverlândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Edealina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Edéia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Estrela do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Faina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Fazenda Nova"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Firminópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Flores de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Formosa"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Formoso"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Gameleira de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Divinópolis de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goianápolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goiandira"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goianésia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goiânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goianira"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Goiatuba"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Gouvelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Guapó"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Guaraíta"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Guarani de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Guarinos"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Heitoraí"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Hidrolândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Hidrolina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Iaciara"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Inaciolândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Indiara"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Inhumas"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Ipameri"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Ipiranga de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Iporá"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Israelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itaberaí"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itaguari"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itaguaru"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itajá"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itapaci"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itapirapuã"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itapuranga"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itarumã"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itauçu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Itumbiara"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Ivolândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Jandaia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Jaraguá"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Jataí"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Jaupaci"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Jesúpolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Joviânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Jussara"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Lagoa Santa"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Leopoldo de Bulhões"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Luziânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mairipotaba"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mambaí"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mara Rosa"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Marzagão"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Matrinchã"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Maurilândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mimoso de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Minaçu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mineiros"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Moiporá"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Monte Alegre de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Montes Claros de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Montividiu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Montividiu do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Morrinhos"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Morro Agudo de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mossâmedes"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mozarlândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mundo Novo"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Mutunópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nazário"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nerópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Niquelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova América"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova Aurora"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova Crixás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova Glória"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova Iguaçu de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova Roma"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Nova Veneza"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Novo Brasil"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Novo Gama"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Novo Planalto"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Orizona"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Ouro Verde de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Ouvidor"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Padre Bernardo"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Palestina de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Palmeiras de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Palmelo"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Palminópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Panamá"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Paranaiguara"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Paraúna"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Perolândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Petrolina de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Pilar de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Piracanjuba"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Piranhas"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Pirenópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Pires do Rio"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Planaltina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Pontalina"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Porangatu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Porteirão"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Portelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Posse"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Professor Jamil"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Quirinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Rialma"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Rianápolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Rio Quente"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Rio Verde"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Rubiataba"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Sanclerlândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Bárbara de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Cruz de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Fé de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Helena de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Isabel"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Rita do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Rita do Novo Destino"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Rosa de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Tereza de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santa Terezinha de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santo Antônio da Barra"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santo Antônio de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Santo Antônio do Descoberto"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Domingos"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Francisco de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São João D'aliança"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São João da Paraúna"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Luís de Montes Belos"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Luíz do Norte"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Miguel do Araguaia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Miguel do Passa Quatro"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Patrício"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "São Simão"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Senador Canedo"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Serranópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Silvânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Simolândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Sítio D'abadia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Taquaral de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Teresina de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Terezópolis de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Três Ranchos"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Trindade"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Trombas"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Turvânia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Turvelândia"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Uirapuru"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Uruaçu"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Uruana"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Urutaí"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Valparaíso de Goiás"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Varjão"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Vianópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Vicentinópolis"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Vila Boa"
          ]);
                $this->city->create([
                    "state_id"=> 9,
            "name"=> "Vila Propício"
          ]);
                $this->city->create([
                    "state_id"=> 7,
            "name"=> "Brasília"
          ]);
                $this->city->create([
                    "state_id"=> 14,
            "name"=> "Mojuí dos Campos"
          ]);
                $this->city->create([
                    "state_id"=> 17,
            "name"=> "Nazaria"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Pescaria Brava"
          ]);
                $this->city->create([
                    "state_id"=> 24,
            "name"=> "Balneário Rincão"
          ]);
                $this->city->create([
                    "state_id"=> 23,
            "name"=> "Pinto Bandeira"
          ]);
            $this->city->create([
                "state_id"=> 12,
                "name"=> "Paraíso das Aguás"
            ]);
        }
    }
}
