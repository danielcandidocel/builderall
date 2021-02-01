@extends('layouts.layout')
@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href="{{ route('customers.index') }}">Clientes</a>
    </li>
    <li class="breadcrumb-item">
        Editar
    </li>
@endsection
@section('conteudo')
    <div class='container-fluid'>
        <div class="card px-md-2">
            <div class='card-header mt-md-4 bg-transparent d-flex justify-content-between align-items-center'>
                <h2>Editar Cliente</h2>
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
                <form method="POST" action="{{ route('customers.update', $customer->id) }}">
                    @csrf
                    @method('PUT')
                    <div class='d-flex flex-column form-group col-4'>
                        <div class="input-group content-height mb-4">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Nome:</div>
                            </div>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                                   id='name' value="@if(old('name')){{ old('name') }} @else {{$customer->name}} @endif"
                                   required>
                        </div>
                        <div class="input-group content-height mb-4">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Estado:</div>
                            </div>
                            <select name="state" class="form-control custom-select @error('state') is-invalid @enderror"
                                    id='state' size='0' required onchange="selectCities()">
                                <option value=""></option>
                                @foreach($states as $state)
                                    <option value="{{ $state->id }}" @if($customer->city->state->id === $state->id)
                                    selected @endif>
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
                                    id='city' size='0' required readonly>
                                <option value=""></option>
                                @foreach($cities as $city)
                                    <option value="{{ $city->id }}" @if($customer->city->id === $city->id)
                                    selected @endif>
                                        {{ $city->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="w-auto mb-2">
                            <button class="btn btn-success d-block mx-auto" type="submit">
                                <i class="fa fa-save mr-1"></i>salvar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
