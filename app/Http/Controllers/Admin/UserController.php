<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
        $this->middleware('isadmin');
    }

    public function getUsers(){
        $users= User::orderBy('id', 'Asc')->get();
        $data = ['users' => $users];
        return view('admin.usuarios.home', $data);
    }
}
