<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\Panel\Customers\CustomerRequest;
use App\Models\City;
use App\Models\Customer;
use App\Models\State;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

/**
 * Class CustomersController
 * @package App\Http\Controllers\Panel
 */
class CustomersController extends Controller
{
    /**
     * @var Customer
     */
    private Customer $customer;
    /**
     * @var City
     */
    private City $city;
    /**
     * @var State
     */
    private State $state;

    /**
     * CustomersController constructor.
     * @param Customer $customer
     * @param City $city
     * @param State $state
     */
    public function __construct(Customer $customer, City $city, State $state)
    {
        $this->customer     = $customer;
        $this->city         = $city;
        $this->state        = $state;
    }

    /**
     * @return Application|Factory|View
     */
    public function index()
    {
        $customers  = $this->customer->query()->orderBy('name', 'asc')->with(['city.state'])->paginate(2);
        $cities     = $this->city->query()->orderBy('name', 'asc')->get();
        $states     = $this->state->query()->orderBy('name', 'asc')->get();

        return view('panel.customers.customers', compact('customers', 'cities', 'states'));
    }

    /**
     * @param Request $request
     * @return Application|Factory|RedirectResponse|Request|View
     */
    public function search(Request $request)
    {
        try {
            $filters        = $request->all();
            $cities         = $this->city->all();
            $states         = $this->state->all();
            if ($request->name != null) {
                $query      = $this->customer->query()->where('name', 'LIKE', '%'.$request->name.'%');
            } else {
                $query      = $this->customer->query()->where('name', '!=', ' ');
            }
            if ($request->city) {
                $query->where('city_id', $request->city);
            } else if ($request->state) {
                $queryCity  = $this->city->query()->select('id')->where('state_id', $request->state)->get();
                $query->whereIn('city_id', $queryCity->pluck('id'));
            }

            if (isset($query) && !empty($query)) {
                $customers  = $query->with(['city.state'])->paginate(2);
            } else {
                $customers  = [];
            }

            return view('panel.customers.customers', compact('customers', 'cities', 'states', 'filters'));

        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * @return Application|Factory|RedirectResponse|View
     */
    public function create()
    {
        try {
            $cities     = $this->city->all();
            $states     = $this->state->all();
            return view('panel.customers.createCustomer', compact('cities', 'states'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * @param CustomerRequest $request
     * @return RedirectResponse
     */
    public function store(CustomerRequest $request)
    {
        try {
            $customerNew = $this->customer->query()->create([
                'name'       => $request->name,
                'city_id'    => $request->city,
            ]);
            if ($customerNew) {
                return redirect()->route('customers.index')->with('success', __('definitions.success.create'));
            }
            return back()->with('error', __('definitions.errors.create.error'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * @param $id
     * @return Application|Factory|RedirectResponse|View
     */
    public function edit($id)
    {
        try {
            $customer = $this->customer->with('city.state')->find($id);
            $cities     = $this->city->all();
            $states     = $this->state->all();
            if ($customer) {
                return view('panel.customers.updateCustomer', compact('cities', 'states', 'customer'));
            }
            return redirect()->route('customers.index')->with('error', __('definitions.errors.notFound'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * @param CustomerRequest $request
     * @param $id
     * @return RedirectResponse
     */
    public function update(CustomerRequest $request, $id)
    {
        try {
            $data = $request->validated();
            if($data) {
                $customer = $this->customer->query()->find($id);
                if ($customer) {
                    $customer->name = $request->name;
                    $customer->city_id = $request->city;
                    $customer->save();
                    return redirect()->route('customers.index')->with('success', __('definitions.success.update'));
                }
                return redirect()->route('customers.index')->with('error', __('definitions.errors.notFound'));
            }
            return back()->with('error', __('definitions.errors.update.error'))->withInput();
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }

    /**
     * @param $id
     * @return RedirectResponse
     */
    public function destroy($id)
    {
        try {
            $customer = $this->customer->query()->find($id);
            if ($customer) {
                $customer->delete();
                return redirect()->route('customers.index')->with('success', __('definitions.success.delete'));
            }
            return redirect()->route('customers.index')->with('error', __('definitions.errors.notFound'));
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }
    }
}
