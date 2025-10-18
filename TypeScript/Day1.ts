
//  Explicit Type
let Name: string = "Ameer";
let Age: number = 24;
let graduated: boolean = true;
let NumArr: number[] = [1, 2, 3, 4, 5, 6];
let StrArr: string[] = ['Ameer', 'Omar'];
let obj: {} = {};
let Description: any = 'Any type';

// Type & Interface

//type
type User = {
    name: string,
    Age: number,
    optinal?: any,
    Or: number | string | boolean,
}

//interface
interface User1 {
    name: string,
    Age: number,
    optinal?: any,
    Or: number | string | boolean,

}
// the difference between the type and interface is interface can use it with Classes


// & with types and interface
let z: User & User1;



//enums // we can store a const things dont changes 
enum WeekDays {
    saturday = "Saturday",
    sunday = "Sunday",
    monday = "Monday",
    tuesday = "tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday"
}



// Generics


function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let NumsArray = getArray<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let StringsArray = getArray<string>(['Ameer', 'Majed', 'Jamal', 'Al-Khoury']);

