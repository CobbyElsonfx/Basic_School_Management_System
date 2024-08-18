<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use inertia\Inertia;
class StudentController extends Controller
{
    //
    public function index(){
        return Inertia::render("Student/Dashboard");
    }
}
