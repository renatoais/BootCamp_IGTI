///Classes JS 

class Animal {
  constructor(name)
{
  this.name = name
  }
  speak(){
    console.log(`${this.name} falando ....`)
  }
}

class Dog extends Animal{
  constructor(name,type){
    super(name)
    this.type = type
  }
  speak(){
    console.log(`${this.name} (${this.type}) miando ....`)
  }
}

class Dog extends Animal{
  constructor(name,type){
    super(name)
    this.type = type
  }
  speak(){
    console.log(`${this.name} (${this.type}) Latindo ....`)
  }
}




const animal = new Animal('totó')
const dog = new Dog ('jack','poodle')
const cat = new Dog ('han solo','flajola')
animal.speak()
dog.speak()
cat.speak()

