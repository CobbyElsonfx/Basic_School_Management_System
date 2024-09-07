<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{

    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    /**
 * Handle an incoming authentication request.
 */
public function store(LoginRequest $request): RedirectResponse
{
    $credentials = $request->only('email', 'password');

    if (!Auth::attempt($credentials)) {
        return redirect()->back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    $user = Auth::user();

    // Check if the selected role matches the authenticated user's role
    if ($user->role !== $request->input('role')) {
        Auth::logout(); // Logout the user if roles don't match
        return redirect()->back()->withErrors([
            'role' => 'The selected role does not match your account.',
        ]);
    }

    // Regenerate session to prevent session fixation
    $request->session()->regenerate();

    // Redirect based on role
    return $this->redirectBasedOnRole();
}


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return to_route('home');
    }


    public function redirectBasedOnRole(){
        $user = Auth::user();
        if ($user->role === 'Admin') {
            return redirect()->intended(route('admin.dashboard', absolute: false));
        } elseif ($user->role === 'Teacher') {
            return redirect()->intended(route('teacher.dashboard', absolute: false));
        } elseif ($user->role === 'Student') {
            return redirect()->intended(route('student.dashboard', absolute: false));
        }
        // Default fallback
        return to_route('login');

    }
}
