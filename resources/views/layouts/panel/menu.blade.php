@php
    $local = 'br';
@endphp
<style>
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .h-container-fluid{
        flex: 1;
    }
</style>

<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-gradient-neutral" id="sidenav-main">
    <div class="container-fluid pt-sm-3">
        <!-- Toggler -->
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="fas fa-bars"></span>
        </button>
        <!-- Brand -->
        <a class="navbar-brand p-0" href="">
            <img src="{{ asset('/img/brand/logo.png') }}" alt='Teste Builderall'>
        </a>
        <ul class="nav align-items-center d-md-none">
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
                    <a class="dropdown-item" href="{{ route('logout') }}" >
                        <i class="fas fa-door-open"></i>
                        <span class='text-capitalize'>
                                @lang('routes.logout')
                            </span>
                        <form id="logout-form-menu" action="{{ route('logout') }}" method="POST" class='d-none'>
                            @csrf
                        </form>
                    </a>
                </div>
            </li>
        </ul>
        <div class="navbar-collapse collapse" id="sidenav-collapse-main" style="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('panel') }}">
                            <i class="nav-icon fa fa-th-large"></i> Painel
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('customers.index') }}">
                            <i class="fas fa-user-friends"></i> Clientes
                        </a>
                    </li>
                </ul>
        </div>
    </div>
</nav>
