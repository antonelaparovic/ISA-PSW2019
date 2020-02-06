export class ExaminationType {
    id: number;
    label: string;
    price: number;
    constructor(label: string, price: number, id?: number) {
        this.label = label;
        this.price = price;
        this.id = id;
    }
}