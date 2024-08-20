<?php
// app/Http/Middleware/RoleMiddleware.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!Auth::check() || !in_array(Auth::user()->role, $roles)) {
            \Log::info('Unauthorized access attempt', [
                'user_role' => Auth::check() ? Auth::user()->role : 'Guest',
                'required_roles' => $roles,
            ]);
            abort(403, 'Unauthorized Message');
        } 

        // Pass the request further in the stack
        return $next($request);
    }
}
