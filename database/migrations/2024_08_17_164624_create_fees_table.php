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
        Schema::create('fees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade'); // FK to students table
            $table->enum('term', ['Term 1', 'Term 2', 'Term 3']);
            $table->enum('level', ['Lower Primary', 'Upper Primary', 'JHS']);
            $table->decimal('amount_due', 8, 2);
            $table->decimal('amount_paid', 8, 2)->default(0.00);
            $table->date('payment_date')->nullable(); // Date of payment
            $table->boolean('is_paid')->default(false); // Status of payment
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fees');
    }
};
