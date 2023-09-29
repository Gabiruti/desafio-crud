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
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 64);
            $table->foreignId('category_id')->constrained()->onUpdate('cascade')
            ->onDelete('cascade');
            $table->float('value', 8, 2);
            $table->date('due_date');
            $table->integer('stock');
            $table->boolean('perishable_product');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
