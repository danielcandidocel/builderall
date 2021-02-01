@extends('layouts.layout')
@section('breadcrumb')
    <li class="breadcrumb-item">
        Perfil
    </li>
@endsection
@section('conteudo')
    <div class='container-fluid'>
        <div class="card px-md-2">
            <div class='card-header mt-md-4 bg-transparent d-flex justify-content-between align-items-center'>
                <h2>Editar Perfil</h2>
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
                <form method="POST" action="{{ route('profile.update', $user->id) }}">
                    @csrf
                    @method('PUT')
                    <div class='d-flex flex-column form-group col-4'>
                        <div class="input-group content-height mb-4">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Nome:</div>
                            </div>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                                   id='name' value="@if(old('name')){{ old('name') }} @else {{$user->name}} @endif"
                                   required>
                        </div>
                        <div class="input-group content-height mb-4">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Email:</div>
                            </div>
                            <input type="text" class="form-control @error('email') is-invalid @enderror" name="email"
                                   id='email' value="@if(old('email')){{ old('email') }} @else {{$user->email}} @endif"
                                   required>
                        </div>
                        <div class="input-group content-height mb-4">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Nova Senha:</div>
                            </div>
                            <input type="password" class="form-control @error('password') is-invalid @enderror"
                                   name="password" id='password'>
                        </div>
                        <div class="input-group content-height mb-4">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Repita a Senha:</div>
                            </div>
                            <input type="password" class="form-control @error('password') is-invalid @enderror"
                                   name="password_confirmation" id='password_confirmation'>
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
