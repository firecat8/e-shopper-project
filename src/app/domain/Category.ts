
export class Category {
    name: string;
    subcategories: Category[];
    constructor(name: string, subcategories: Category[]) {
        this.name = name;
        this.subcategories = subcategories;
    }
}