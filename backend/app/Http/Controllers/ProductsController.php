<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    // Display a listing of the resource.
    public function getAllProducts()
    {
        // $products = Products::all();

        $products = Products::select('products.*', 'categories.category as category_name')
        	->join('categories', 'categories.id', '=', 'products.category_id')
        	->get();
        
        return response()->json($products);
    }

    //Store a newly created resource in storage.
    public function createProduct(Request $request)
    {
        $product = new Products;
        $product->name = $request->name;
        $product->category_id = $request->category_id;
        $product->value = $request->value;
        $product->due_date = $request->due_date;
        $product->stock = $request->stock;
        $product->perishable_product = $request->perishable_product;
        $product->save();

        return response()->json([
            "message" => "Product record created!"
        ], 201);
    }

 
    // Display the specified resource.
    public function getProduct(string $id)
    {
        $product = Products::find($id);

        if(!empty($product))
        {
            return response()->json($product);
        }
        else
        {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }
    
    //Update the specified resource in storage.
    public function updateProduct(Request $request, string $id)
    {
        if (Products::where('id',$id)-> exists()){
            $product = Products::find($id);

            $product->name = is_null($request->name) ? $product->name : $request->name;
            $product->category_id = is_null($request->category_id) ? $product->category_id : $request->category_id;
            $product->value = is_null($request->value) ? $product->value : $request->value;
            $product->due_date = is_null($request->due_date) ? $product->due_date : $request->due_date;
            $product->stock = is_null($request->stock) ? $product->stock : $request->stock;
            $product->perishable_product = is_null($request->perishable_product) ? $product->perishable_product : $request->perishable_product;

            $product->save();

            return response()->json(
                [
                    'message' => 'Product Updated.'
                ], 200);
        }else{
            return response()->json(
                [
                    'message' => 'Product not found.'
                ], 404);
        }
    }


    //Remove the specified resource from storage.
    public function deleteProduct(string $id)
    {
        if (Products::where('id',$id)-> exists()){
            $product = Products::find($id);

            $product->delete();

            return response()->json(
                [
                    'message' => 'Product Deleted.'
                ], 202);
        }else{
            return response()->json(
                [
                    'message' => 'Product not found.'
                ], 404);
        }
    }
}
