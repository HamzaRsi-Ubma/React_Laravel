<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class APIController extends Controller
{
    //

public function getUsers()
{
$getUsers=User::get();
/*return $getUsers;*/
return response()->json(["users"=>$getUsers],200);
}
}
