@extends('layouts.layout')
@section('breadcrumb')
    <li class="breadcrumb-item">
        Clientes
    </li>
@endsection
@push('css')
    <style>
        .table-responsive{
            overflow-x:hidden !important;
        }
    </style>
@endpush
@section('conteudo')
    <div class='container-fluid'>
        <div class="card px-md-2">
            <div class='card-header mt-md-4 bg-transparent d-flex justify-content-between align-items-center'>
                <h2>Relação de Clientes Ativos</h2>
                <a href="{{ route('customers.create') }}" class="btn btn-success">Adiconar
                    Cliente</a>
            </div>
            <div class="card-body">
                <form method="GET" action="{{ route('customers.search') }}">
                    <div class='d-flex flex-column flex-md-row form-group'>
                        <div class="input-group content-height mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Nome:</div>
                            </div>
                            <input type="text" class="form-control" name="name" id='name'
                                   value="{{ old('name') ?? $filters['name'] ?? '' }}" placeholder="">
                        </div>
                        <div class="input-group content-height mb-2 ml-2 mr-2 col-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Estado:</div>
                            </div>
                            <select name="state" class="form-control custom-select brr" id='state' size='0'
                                    onchange="selectCities()">
                                <option value="">Todos</option>
                                @foreach($states as $state)--}}
                                    <option value="{{ $state->id }}" @if(isset($filters['state'])
                                                                            && $filters['state'] == $state->id)
                                    selected="selected" @endif>
                                        {{ $state->name }}
                                    </option>
                                @endforeach
                            </select>

                        </div>
                        <div class="input-group content-height mb-2 ml-2 mr-2 col-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Cidade:</div>
                            </div>
                            <select name="city" class="form-control custom-select brr" id='city' size='0' readonly>
                                <option value="">Todos</option>
                                @foreach($cities as $city)--}}
                                <option value="{{ $city->id }}" @if(isset($filters['city'])
                                                                    &&  $filters['city'] == $city->id)
                                selected="selected" @endif>
                                    {{ $city->name }}
                                </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="w-auto mb-2">
                            <button class="btn btn-success d-block mx-auto" type="submit">
                                <i class="fa fa-search mr-1"></i>Buscar
                            </button>
                        </div>
                    </div>
                </form>
                <div class="d-flex justify-content-end mb-3">
                    <small><a href="{{ route('customers.index') }}">Limpar Filtros</a></small>
                </div>
                @if ($customers)
                    <div class="table-responsive">
                        <table class="table table-hover table-striped table-bordered mb-md-4" id="tableCustomers">
                            <thead>
                            <tr>
                                <th class="text-center">Nome</th>
                                <th class="text-center">Cidade</th>
                                <th class="text-center">Estado</th>
                                <th class="text-center">Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($customers as $customer)
                                <tr>
                                    <td class="text-center align-middle">
                                        {{ $customer->name }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ $customer->city->name }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ $customer->city->state->name }}
                                    </td>
                                    <td class="text-center align-middle">
                                        <a href="{{ route('customers.edit', $customer->id) }}" class="text-black-50">
                                            <i class="fas fa-user-edit"></i>
                                        </a>
                                        <button class="btn-transparent delete-customer border-0 text-black-50"
                                                data-customer-id="{{
                                        $customer->id }}">
                                            <i class="fas fa-trash" style="cursor:pointer;"></i>
                                        </button>
                                        <form id="form-delete-customer-{{ $customer->id  }}"
                                              action="{{ route('customers.destroy', $customer->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        @if(isset($filters))
                            {{ $customers->appends($filters)->links() }}
                        @else
                            {{ $customers->links() }}
                        @endif
                    </div>
                @else
                    <div class="alert alert-warning">
                        Nenhum Cadastro Encontado!
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script>
        $(document).ready(function() {
            $('#tableCustomers').DataTable();
        } );
    </script>
@endpush
