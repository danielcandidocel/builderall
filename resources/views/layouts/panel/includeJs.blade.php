<script src="{{ asset('/js/app.js') }}"></script>
<script type="text/javascript" src="{{ asset("/js/select2.min.js") }}"></script>
<script type="text/javascript" src="{{ asset("/js/i18n/pt-BR.js") }}"></script>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.23/js/dataTables.bootstrap4.min.js"></script>

<script type="text/javascript" src="{{ asset("/js/jquery.mask.min.js") }}"></script>

<script src="{{asset('js/jquery.maskMoney.js')}}" type="text/javascript"></script>
<script type="text/javascript" src="{{ asset("/js/toastr.min.js") }}"></script>
<script type="text/javascript" src="{{ asset("/js/moment.min.js") }}"></script>
<script type="text/javascript" src="{{ asset("/js/daterangepicker.min.js") }}"></script>
<link rel="stylesheet" type="text/css" href="{{ asset("/css/daterangepicker.css") }}"/>
<script src="{{ asset('/js/argon.js') }}"></script>
<script src="{{ asset('/js/loading.js') }}"></script>
<link rel="stylesheet" type="text/css" href="{{ asset("/css/loading.css") }}"/>
<script type="text/javascript">
        $(document).ready(function() {
        $('#tableCustomers').DataTable({
                paging: false,
                ordering: true,
                info: false,
                searching:false,
                "order": [[ 2, "desc" ]]
            }
        );
    } );

    (function ($) {
        @if(Session::has('success'))
            toastr["success"]("<b>SUCESSO: </b><br>{{ Session::get('success') }}");
        @endif
        @if(Session::has('error'))
            toastr["error"]("<b>ERRO: </b><br>{{ Session::get('error') }}");
        @endif
    }(jQuery));

    $('.delete-customer').on('click', function (e) {
        e.preventDefault();
        let id = $(this).attr('data-customer-id');
        Swal({
            title: 'Deseja Realmente Excluir o Cliente?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#DD3333',
            confirmButtonText: 'Confirmar'
        }).then((result) => {
            if (result.value) {
                document.getElementById('form-delete-customer-'+id).submit();
            }
        })
    });

    function selectCities() {
        let state = $('#state').val();
        if(state.length > 0) {
            $.ajaxSetup({
                headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},
                method: 'POST',
                url: '{{ route('cities.search') }}'
            });
            $.ajax({
                data: {
                    state: state,
                },
                success: function (data) {
                    console.log(data[0].id)
                    let html = '<option value="">Todos</option>';
                    for (let n = 0; n < data.length; n++) {
                        html += `<option value="${data[n].id}">${data[n].name}</option>`;
                    }
                    $('#city').html(html);
                    $('#city').removeAttr('readonly');
                    $('#city').removeAttr('disabled');
                },
                error: function (data) {
                    $('#city').attr('readonly', 'readonly');
                }
            });
        } else {
            $('#city').attr('readonly', 'readonly');
        }
    }
</script>
