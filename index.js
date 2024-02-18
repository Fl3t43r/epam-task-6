'use strict';

try {
    console.log(a); 
    let a = 3;
} catch (error) {
    console.error("let must be declared");
}

try {
    console.log(1 / 0);
} catch (error) {
    console.error("cannot be divided by zero");
}
