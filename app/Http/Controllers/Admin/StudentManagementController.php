<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class StudentManagementController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/StudentManagement/Index');
    }

    public function enrollment()
    {
        return Inertia::render('Admin/StudentManagement/Enrollment');
    }

    public function transfer()
    {
        return Inertia::render('Admin/StudentManagement/Transfer');
    }

    public function profiles()
    {
        return Inertia::render('Admin/StudentManagement/Profiles');
    }

    public function attendance()
    {
        return Inertia::render('Admin/StudentManagement/Attendance');
    }

    public function behavior()
    {
        return Inertia::render('Admin/StudentManagement/Behavior');
    }
}
