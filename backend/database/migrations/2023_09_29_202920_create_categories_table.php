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
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('category', 64);
            $table->timestamps();
        });

        DB::table('categories')->insert([
            ['category' => 'Eletrodomésticos'],
            ['category' => 'Alimentos e Bebidas'],
            ['category' => 'Eletrônicos e Tecnologia'],
            ['category' => 'Roupas e Acessórios'],
            ['category' => 'Casa e Quintal']
        ]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
