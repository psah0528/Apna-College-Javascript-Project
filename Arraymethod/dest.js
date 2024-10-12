let names = ["tony", "sita", "ram" , "abc" , "others" , "othh"];
let [winner , runnerup , secondrunnerup, ...others] = names;

// dest with object 

const student = {
 name : "karan",
 age : 18,
 class: 10,
 subject: ["hindhi" , "eng", "maths"],
 username: "karan@11",
 password: "abcd",
};
let{ username , password , city="mumbai"} = student;


