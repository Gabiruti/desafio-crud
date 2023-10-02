export interface Product {
    id?: number;
    name: string;
    category_id: number;
    value: number;
    due_date: Date;
    stock: number;
    perishable_product?: boolean;
    category_name?: string;
}

export interface ProductUpdate extends Partial<Product> {}
