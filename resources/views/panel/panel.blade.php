@extends('layouts.layout')
@push('css')
    <style>
        #cardCustomersActive{
            background: #2E0B64;
        }
        #cardCustomersAll{
            background: darkgreen;
        }
        #cardCustomersTrashed{
            background: red;
        }
        #cardCustomersActive span,
        #cardCustomersAll span,
        #cardCustomersTrashed span{
            font-size: 100px;
            padding:40px;
            color:#FFF
        }
    </style>
@endpush
@section('conteudo')
    <div class='container-fluid'>
        <div class="card px-md-2">
            <div class='card-header mt-md-4 bg-transparent d-flex justify-content-between align-items-center'>
                <h2>Painel</h2>
            </div>
            <div class="card-body d-flex justify-content-around">
                <div class="card" style="width: 18rem;" id="cardCustomers">
                    <div class="d-flex justify-content-center align-items-center" id="cardCustomersAll">
                        <span>{{$data['countAll']}}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Clientes Cadastrados</h5>
                        <p class="card-text">Atualmente você possui <bold>{{$data['countAll']}}</bold>
                            Cliente(s) Cadastrado(s).</p>
                        <a href="{{ route('customers.create') }}" class="btn btn-success">Adiconar Cliente</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;" id="cardCustomers">
                    <div class="d-flex justify-content-center align-items-center" id="cardCustomersActive">
                        <span>{{$data['countActive']}}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Clientes Ativos</h5>
                        <p class="card-text">Atualmente você possui <bold>{{$data['countActive']}}</bold>
                            Cliente(s) Ativo(s).</p>
                        <a href="{{ route('customers.create') }}" class="btn btn-success">Adiconar Cliente</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;" id="cardCustomers">
                    <div class="d-flex justify-content-center align-items-center" id="cardCustomersTrashed">
                        <span>{{$data['countTrashed']}}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Clientes Excluídos</h5>
                        <p class="card-text">Atualmente você possui<bold>{{$data['countTrashed']}}</bold>
                            Cliente(s) Excluído(s)s.</p>
                        <a href="{{ route('customers.create') }}" class="btn btn-success">Adiconar Cliente</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
