<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

/**
 * Class PanelController
 * @package App\Http\Controllers\Panel
 */
class PanelController extends Controller
{
    /**
     * @var Customer
     */
    private Customer $customer;

    /**
     * PanelController constructor.
     * @param Customer $customer
     */
    public function __construct(Customer $customer)
    {
        $this->customer     = $customer;
    }

    /**
     * @return Application|Factory|RedirectResponse|View
     */
    public function index()
    {
        try {
            $data['countActive']            = $this->customer->count();
            $data['countAll']               = $this->customer->query()->withTrashed()->count();
            $data['countTrashed']           = $data['countAll'] - $data['countActive'];
            return view('panel.panel', compact('data'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * @return Application|Factory|View
     */
    public function profile()
    {
        return view('panel.profile');
    }
}
