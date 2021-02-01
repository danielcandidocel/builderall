<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'state_id'
    ];

    /**
     * @return HasOne
     */
    public function state()
    {
        return $this->hasOne(State::class, 'id', 'state_id');
    }
}
