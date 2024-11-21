<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Fee;
use Illuminate\Http\Request;

class FeeController extends Controller
{
    public function index()
    {
        $fees = Fee::all();
        return view('admin.fees.index', compact('fees'));
    }

    public function create()
    {
        return view('admin.fees.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'amount' => 'required|numeric',
            'status' => 'required|in:paid,pending',
        ]);

        Fee::create($request->all());

        return redirect()->route('admin.fees.index')->with('success', 'Fee recorded successfully.');
    }

    public function show($id)
    {
        $fee = Fee::findOrFail($id);
        return view('admin.fees.show', compact('fee'));
    }

    public function update(Request $request, $id)
    {
        $fee = Fee::findOrFail($id);
        $fee->update($request->all());

        return redirect()->route('admin.fees.index')->with('success', 'Fee information updated successfully.');
    }

    public function destroy($id)
    {
        $fee = Fee::findOrFail($id);
        $fee->delete();

        return redirect()->route('admin.fees.index')->with('success', 'Fee record deleted successfully.');
    }
}
