//  Explicit Type
let Name = "Ameer";
let Age = 24;
let graduated = true;
let NumArr = [1, 2, 3, 4, 5, 6];
let StrArr = ['Ameer', 'Omar'];
let obj = {};
let Description = 'Any type';
// the difference between the type and interface is interface can use it with Classes
// & with types and interface
let z;
//enums // we can store a const things dont changes 
var WeekDays;
(function (WeekDays) {
    WeekDays["saturday"] = "Saturday";
    WeekDays["sunday"] = "Sunday";
    WeekDays["monday"] = "Monday";
    WeekDays["tuesday"] = "tuesday";
    WeekDays["wednesday"] = "Wednesday";
    WeekDays["thursday"] = "Thursday";
    WeekDays["friday"] = "Friday";
})(WeekDays || (WeekDays = {}));
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let NumsArray = getArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let StringsArray = getArray(['Ameer', 'Majed', 'Jamal', 'Al-Khoury']);
export { };
//# sourceMappingURL=Day1.js.map