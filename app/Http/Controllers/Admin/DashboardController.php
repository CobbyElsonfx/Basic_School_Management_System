<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch necessary data for the dashboard
        $studentCount = Student::count();
        $outstandingFees = Fee::where('status', 'pending')->sum('amount');
        $recentAdmissions = Admission::latest()->take(5)->get();

        // Pass data to the view
        return view('admin.dashboard', compact('studentCount', 'outstandingFees', 'recentAdmissions'));
    }
}
