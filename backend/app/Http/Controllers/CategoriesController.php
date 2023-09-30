<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;

class CategoriesController extends Controller
{

    // Display a listing of the resource.
    public function getAllCategories()
    {
        $categories = Categories::all();
        return response()->json($categories);
    }

    //Store a newly created resource in storage.
    public function createCategory(Request $request)
    {
        $category = new Categories;
        $category->category = $request->category;
        $category->save();

        return response()->json([
            "message" => "category record created!"
        ], 201);
    }

 
    // Display the specified resource.
    public function getCatogory(string $id)
    {
        $category = Categories::find($id);

        if(!empty($category))
        {
            return response()->json($category);
        }
        else
        {
            return response()->json([
                "message" => "Category not found"
            ], 404);
        }
    }
    
    //Update the specified resource in storage.
    public function updateCategory(Request $request, string $id)
    {
        if (Categories::where('id',$id)-> exists()){
            $category = Categories::find($id);

            $category->category = is_null($request->category) ? $category->category : $request->category;

            $category->save();

            return response()->json(
                [
                    'message' => 'Category Updated.'
                ], 200);
        }else{
            return response()->json(
                [
                    'message' => 'Category not found.'
                ], 404);
        }
    }


    //Remove the specified resource from storage.
    public function deleteCategory(string $id)
    {
        if (Categories::where('id',$id)-> exists()){
            $category = Categories::find($id);

            $category->delete();

            return response()->json(
                [
                    'message' => 'Category Deleted.'
                ], 202);
        }else{
            return response()->json(
                [
                    'message' => 'Category not found.'
                ], 404);
        }
    }
}
