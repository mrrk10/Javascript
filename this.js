// "This" keyword refers to the object it beong to
// It has different values depending on where it is use:
    // 1.Alone,refers to global obejct
    // 2.In a regular,this refers to the global object
    // 3.In a method, this refers to the owner object

// 3.
var personalDetails={
    fname:'roshan',
    lname:'kandel',
    address:'ktm',
    phone:123,
    details:function(){
    console.log(`Details of person ${this.fname} ${this.lname} ${this.address} ${this.phone}`);
    }
}

personalDetails.details();