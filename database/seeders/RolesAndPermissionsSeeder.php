<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Create Roles
        $adminRole = Role::create(['name' => 'Admin']);
        $teacherRole = Role::create(['name' => 'Teacher']);
        $studentRole = Role::create(['name' => 'Student']);
        $parentRole = Role::create(['name' => 'Parent']);

        // Define Admin Permissions
        $adminPermissions = [
            'create students',
            'view students',
            'edit students',
            'delete students',
            'generate admission reports',
            'create fee structures',
            'view fee structures',
            'edit fee structures',
            'delete fee structures',
            'record payments',
            'view payments',
            'generate fee reports',
            'create employees',
            'view employees',
            'edit employees',
            'delete employees',
            'manage salaries',
            'generate employee reports',
            'define grading system',
            'view examination results',
            'publish results',
            'generate examination reports',
            'send messages',
            'post announcements',
        ];

        // Define Teacher Permissions
        $teacherPermissions = [
            'view student profiles',
            'record attendance',
            'input marks',
            'generate student performance reports',
            'send messages',
            'view announcements',
            'update personal profile',
        ];

        // Define Student Permissions
        $studentPermissions = [
            'view class routine',
            'view examination results',
            'update personal profile',
            'send messages to teachers',
        ];

        // Define Parent Permissions
        $parentPermissions = [
            'view child’s performance',
            'view fee payment status',
            'send messages to teachers',
            'update personal profile',
        ];

        // Create Permissions
        foreach ($adminPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        foreach ($teacherPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        foreach ($studentPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        foreach ($parentPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Assign Permissions to Roles
        $adminRole->givePermissionTo($adminPermissions);
        $teacherRole->givePermissionTo($teacherPermissions);
        $studentRole->givePermissionTo($studentPermissions);
        $parentRole->givePermissionTo($parentPermissions);
    }
}
