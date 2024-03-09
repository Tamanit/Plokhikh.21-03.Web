export class Pizza{
    type = '';
    size = '';
    toppings = [];
    calorie = 0;
    prise = 0;

    constructor(type, size) {
        this.type = type.name;
        this.size = size.name;
        this.calorie += size.calorie;
        this.calorie += type.calorie;
        this.prise += size.prise;
        this.prise += size.prise;
    }

    set addTopping(topping){
        this.toppings.push(topping.name);
        if (this.size === 'Большая'){
            this.calorie += topping.big.calorie;
            this.prise += topping.big.prise;
        } else {
            this.calorie += topping.small.calorie;
            this.prise += topping.small.prise;
        }
    }

    set removeTopping(topping){
        this.toppings = this.toppings.filter(x => x !== topping.name)
        if (this.size === 'Большая'){
            this.calorie -= topping.big.calorie;
            this.prise -= topping.big.prise;
        } else {
            this.calorie -= topping.small.calorie;
            this.prise -= topping.small.prise;
        }
    }

    get getToppings(){
        return this.toppings;
    }

    get getSize(){
        return this.size;
    }

    get getType(){
        return this.type;
    }

    get calculatePrice(){
            return this.prise;
    }

    get calculateCalorie(){
        return this.calorie;
    }

}