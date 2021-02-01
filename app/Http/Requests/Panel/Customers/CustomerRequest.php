<?php

namespace App\Http\Requests\Panel\Customers;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CustomerRequest
 * @package App\Http\Requests\Panel\Customers
 */
class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules()
    {
        return [
            "name"                              => "required",
            "state"                             => "required",
            "city"                              => "required",

        ];
    }

    /**
     * @return array|string[]
     */
    public function messages()
    {
        return [
            "name.required"                       => "O nome é obrigatório",
            "city.required"                       => "Escolha uma cidade",
            "state.required"                      => "Escolha um Estado",
        ];
    }
}
