// when to use type annoations //
// 1. when a function return any type//
const jsonString = '{x:10,y:20}'

let coordinate = JSON.parse(jsonString);

//coordinate return type is any by default bcs typescript can not determine the retun type//

// coordinate.jkahdjkdhj // no error warning

// solution //

let typedCoordinate:{x:number;y:number} = JSON.parse(jsonString);

// typedCoordinate.asdgasdg // gives error

// 2. when a variable declaration and initialisation in two different lines //

let istrue;
istrue = true;

// solution//
let isTrue:boolean;
isTrue = false;

// 3. when a variable supposed to take different types//

let numberAboveZero = false;
// numberAboveZero = 2// will show error;

let numberAboveZero_ : boolean | number = false;
numberAboveZero_ = 5;
