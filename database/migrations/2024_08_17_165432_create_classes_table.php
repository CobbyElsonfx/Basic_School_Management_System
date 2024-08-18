<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // e.g., Basic 5
            $table->string('section')->nullable(); // e.g., A, B, X, Y (can be null if not divided)
            $table->enum('level', ['Lower Primary', 'Upper Primary', 'JHS']);
            $table->foreignId('teacher_id')->nullable()->constrained('users')->onDelete('set null'); // FK to users table (Teacher assigned to the class)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
