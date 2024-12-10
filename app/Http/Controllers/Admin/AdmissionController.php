<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdmissionController extends Controller
{
    public function index()
    {
      
        return Inertia::render('Admin/pages/Students/admissionManagement/Admission');
    }

    public function create()
    {
        return Inertia::render('Admin/Admissions/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'class' => 'required|string',
            'section' => 'nullable|string',
        ]);

        Student::create($request->all());

        return redirect()->route('admin.admissions.index')->with('success', 'Student enrolled successfully.');
    }

    public function show($id)
    {
        $student = Student::findOrFail($id);
        return Inertia::render('Admin/Admissions/Show', [
            'student' => $student
        ]);
    }

    public function edit($id)
    {
        $student = Student::findOrFail($id);
        return Inertia::render('Admin/Admissions/Edit', [
            'student' => $student
        ]);
    }

    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'class' => 'required|string',
            'section' => 'nullable|string',
        ]);

        $student->update($request->all());

        return redirect()->route('admin.admissions.index')->with('success', 'Student information updated successfully.');
    }

    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        return redirect()->route('admin.admissions.index')->with('success', 'Student record deleted successfully.');
    }
}
