<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\FeeController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\StudentManagementController;
use App\Http\Controllers\Admin\ExamController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\AdmissionController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController:: class, 'destroy'])->name('profile.destroy');
});



Route::middleware(["auth", "verified"])->group(function(){

    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');


    Route::prefix('admin/students')->group(function () {
        // Route::resource('students', StudentController::class);  // CRUD for students
        Route::get('admissions', [AdmissionController::class, 'index'])->name('admin.students.admissions');
        Route::get('transfer', [StudentManagementController::class, 'transfer'])->name('admin.students.transfer');
        Route::get('attendance', [StudentManagementController::class, 'attendance'])->name('admin.students.attendance');
        Route::get('behavior', [StudentManagementController::class, 'behavior'])->name('admin.students.behavior');
    });
    
    // Fee Management Routes
    Route::prefix('admin/fees')->group(function () {
        // Route::resource('fees', FeeController::class);  // CRUD for fee structure, payments, etc.
        Route::get('transaction-history', [FeeController::class, 'transactionHistory'])->name('admin.fees.transaction-history');
        Route::get('reports', [FeeController::class, 'reports'])->name('admin.fees.reports');
    });
    
    // Employee Management Routes
    Route::prefix('admin/employees')->group(function () {
        Route::resource('employees', EmployeeController::class);  // CRUD for employee records, etc.
        Route::get('salary', [EmployeeController::class, 'salary'])->name('admin.employees.salary');
        Route::get('reports', [EmployeeController::class, 'reports'])->name('admin.employees.reports');
    });
    
    // Examination Management Routes
    Route::prefix('admin/examinations')->group(function () {
        Route::get('grading', [ExamController::class, 'grading'])->name('admin.examinations.grading');
        Route::get('master-sheet', [ExamController::class, 'masterSheet'])->name('admin.examinations.master-sheet');
        Route::get('results', [ExamController::class, 'results'])->name('admin.examinations.results');
        Route::get('reports', [ExamController::class, 'reports'])->name('admin.examinations.reports');
    });
    
    // Communication Routes
    Route::prefix('admin/communication')->group(function () {
        Route::get('messages', [MessageController::class, 'messages'])->name('admin.communication.messages');
        // Route::resource('announcements', AnnouncementController::class);  // CRUD for announcements
    });
    

});


require __DIR__.'/auth.php';
