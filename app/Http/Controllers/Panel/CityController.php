<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Exception;

/**
 * Class CityController
 * @package App\Http\Controllers\Panel
 */
class CityController extends Controller
{

    /**
     * @var City
     */
    private City $city;

    /**
     * CityController constructor.
     * @param City $city
     */
    public function __construct(City $city)
    {
        $this->city     = $city;
    }

    /**
     * @param Request $request
     * @return JsonResponse|RedirectResponse
     */
    public function search(Request $request)
    {
        try {
            $cities  = $this->city->query()->where('state_id', $request->state)->get();
            return response()->json($cities);
        } catch (Exception $ex) {
            report($ex);
            return back()->with('error', $ex);
        }

    }
}
