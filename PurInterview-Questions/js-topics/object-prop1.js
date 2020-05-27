/**
 * What will be the output of the following console.log?
 */

let obj = {
    'a': 'three',
    b: 4,
    'c': "five",
    a: 3,
    'b': "four",
    "c": 'five',
    "a": "tre",
    "b": 'fyra',
    c: 5
};

console.log(obj);
//{ a: 'tre', b: 'fyra', c: 5 }

//Every property(key) is interpreted as string
//If we define key multiple time, the last occurrence of the key will be considered as final
