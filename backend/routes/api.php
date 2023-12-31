<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


//CATEGORIES
Route::get('/categories',[CategoriesController::class, 'getAllCategories']);
Route::get('/categories/{id}',[CategoriesController::class, 'getCatogory']);
Route::post('/categories', [CategoriesController::class, 'createCategory']);
Route::put('/categories/{id}',[CategoriesController::class, 'updateCategory']);
Route::delete('/categories/{id}',[CategoriesController::class, 'deleteCategory']);

//PRODUCTS
Route::get('/products',[ProductsController::class, 'getAllProducts']);
Route::get('/products/{id}',[ProductsController::class, 'getProduct']);
Route::post('/products', [ProductsController::class, 'createProduct']);
Route::put('/products/{id}',[ProductsController::class, 'updateProduct']);
Route::delete('/products/{id}',[ProductsController::class, 'deleteProduct']);

