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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // FK to users table
            $table->foreignId('parent_id')->constrained('parents')->onDelete('cascade'); // FK to parents table
            $table->string('student_id')->unique(); // Unique identifier for each student
            $table->string('firstname');
            $table->string('lastname');
            $table->date('date_of_birth');
            $table->enum('gender', ['Male', 'Female']);
            $table->string('address')->nullable();
            $table->foreignId('class_id')->constrained('classes'); // FK to classes table
            $table->date('admission_date');
            $table->enum('status', ['Active', 'Graduated', 'Withdrawn'])->default('Active'); // To track the student's current status
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
