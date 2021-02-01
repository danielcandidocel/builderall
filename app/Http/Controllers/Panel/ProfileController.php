<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\View\View;
use Illuminate\Support\Facades\Validator;

/**
 * Class ProfileController
 * @package App\Http\Controllers\Panel
 */
class ProfileController extends Controller
{

    /**
     * @var User
     */
    private User $users;

    /**
     * ProfileController constructor.
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->users = $user;
    }

    /**
     * @return Application|Factory|RedirectResponse|View
     */
    public function index()
    {
        try {
            $user = Auth::user();
            return view('panel.profile', compact('user'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return RedirectResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $data               = $request->only('name', 'password', 'email', 'password_confirmation');
            $rulesPassword      = '';
            if (isset($data['password']) && !empty($data['password'])) {
                $rulesPassword  = "required|string|min:6|confirmed";
            }
            if($data['email'] != Auth::user()->email){
                $rulesEmail     = "required|string|max:255|email|unique:users";
            } else {
                $rulesEmail     = "required|string|max:255|email";
            }
            if (isset($data['email']) && !empty($data['password'])) {
                $rulesPassword = "required|string|min:6|confirmed";
            }
            $rules      = [
                "name"              => "required|string|max:255",
                "email"             => $rulesEmail,
                "password"          => $rulesPassword,
            ];
            $messages   = [
                "name.required"         => "O nome é obrigatório!",
                "email.required"        => "O email é obrigatório!",
                "email.email"           => "Favor informar um email válido!",
                "email.unique"          => "Email já cadastrado!",
                "password.min"          => "As senhas deve conter no mínimo 6 caracteres!",
                "password.confirmed"    => "As senhas não coincidem!",
            ];
            $validator = Validator::make($data, $rules, $messages);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput()->exceptInput('password');
            }

            $user = $this->users->query()->find($id);
            if ($user) {
                $user->name     = $data['name'];
                $user->email    = $data['email'];
                $user->password = Hash::make($data['password']);
                $user->save();
            }

            return redirect()->route('profile')->with('success', __('definitions.user.update.success'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }

    }

}
