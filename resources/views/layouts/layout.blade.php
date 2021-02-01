<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="theme-color" content="red">
    <meta name="description" content="">
    <meta name="keyword" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Builderall - Teste</title>
    <link href="{{ asset('/img/favicon.ico') }}" rel="icon" type="image/png"/>
    <link href="{{ asset('/font/css/all.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/argon.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/select2.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/toastr.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/custom_loading.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700" rel="stylesheet">
    @stack('css')
    <script>
    </script>
</head>
<body class="vsc-initialized">
@include('layouts.panel.menu')
<div class='main-content h-100vh d-flex flex-column'>
    <nav class="navbar navbar-top navbar-expand-md navbar-dark bg-gradient-success p-md-3 py-0 d-flex justify-content-end"
         style="z-index: 10">
        <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                    <div class="media">
                        <i class='fa fa-user'></i>
                        <div class="media-body ml-2 d-none d-lg-block">
                            <span class="mb-0 text-sm  font-weight-bold">{{ auth()->user()->name }}</span>
                        </div>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <a class="dropdown-item" href="{{ route('profile') }}">
                        <i class="fas fa-user"></i>
                        <span>Perfil</span>
                    </a>
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class='text-capitalize'>
                                Logout
                            </span>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class='d-none'>
                            @csrf
                        </form>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a href="{{ route('panel') }}">Painel</a>
        </li>
        @yield('breadcrumb')
    </ol>
    <div class="container-fluid container-fluid d-flex flex-column h-container-fluid">
        <div>
            @yield('conteudo')
        </div>
    </div>
</div>

@include('layouts.panel.includeJs')
</body>
</html>

