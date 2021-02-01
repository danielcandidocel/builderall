<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'city_id'
    ];

    /**
     * @return HasOne
     */
    public function city()
    {
        return $this->hasOne(City::class, 'id', 'city_id');
    }
}
