class person{
    constructor(name, age)
    {
        this.name= name;
        this.age = age;
    }

    greeting()
    {
    console.log('hello, my name is '+this.name+' and my age is '+this.age)    
    }
}
/*const rk = new person('rk',20);
rk.greeting();
*/ 

// export

module.exports = person