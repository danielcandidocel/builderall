@extends('layouts.layout')
@section('breadcrumb')
<li class="breadcrumb-item">
    <a href="{{ route('customers.index') }}">Clientes</a>
</li>
<li class="breadcrumb-item">
    Novo
</li>
@endsection
@section('conteudo')
<div class='container-fluid'>
    <div class="card px-md-2">
        <div class='card-header mt-md-4 bg-transparent d-flex justify-content-between align-items-center'>
            <h2>Cadastrar Novo Cliente</h2>
        </div>
        <div class="card-body">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <form method="POST" action="{{ route('customers.store') }}">
                @csrf
                <div class='d-flex flex-column form-group col-4'>
                    <div class="input-group content-height mb-4">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Nome:</div>
                        </div>
                        <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                               id='name' value="{{ old('name') }}" placeholder="" required>
                    </div>
                    <div class="input-group content-height mb-4">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Estado:</div>
                        </div>
                        <select name="state" class="form-control custom-select @error('state') is-invalid @enderror"
                            id='state' size='0' required @if ($errors->any() && old('state')) {{ old('state') }} @endif
                                onchange="selectCities()">
                            <option value=""></option>
                            @foreach($states as $state)
                                <option value="{{ $state->id }}">
                                    {{ $state->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="input-group content-height mb-4">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Cidade:</div>
                        </div>
                        <select name="city" class="form-control custom-select @error('city') is-invalid @enderror"
                            id='city' size='0' required @if ($errors->any() && old('city')) {{ old('city') }} @endif
                                readonly>
                            <option value=""></option>
                            @foreach($cities as $city)
                                <option value="{{ $city->id }}">
                                    {{ $city->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="w-auto mb-2">
                        <button class="btn btn-success d-block mx-auto" type="submit">
                            <i class="fa fa-save mr-1"></i>Cadastrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
