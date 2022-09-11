'use strict'

const PersonProto = {
  calcAge(){
    console.log(2022 - this.birthYear);
  },

  init(firstName , birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  },
}

const jam = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto)
StudentProto.init = function(firstName , birthYear, course){
  PersonProto.init.call(this , firstName , birthYear)
  this.course = course
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto)
jay.init('Jay' , 2003 , "Computer Engineering")
jay.introduce()
jay.calcAge()