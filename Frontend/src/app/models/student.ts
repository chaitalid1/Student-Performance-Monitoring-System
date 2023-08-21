export class Student {
    studentId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    usnno: string;
    DOB: string;
    phone: string;
    email: string;
    gender: string;
    yearOfAdmission: number;
    teacherGuardian: string;
    // Address: {
    //     addressId: number;
    //     line1: string;
    //     line2: string;
    //     street: string;
    //     district: string;
    //     city: string;
    //     pincode: number;
    //     country: string;
    //     landmark: string;
    // }
    address: string;
    fatherName: string;
    motherName: string;
    parentEmail: string;
    fatherPhone: string;
    motherPhone: string;

    constructor(){
        this.studentId = 0;
        this.firstName = '';
        this.lastName = '';
        this.usnno = '';
        this.middleName = '';
        // this.Address = {
        //     addressId: 0,
        //     line1: '',
        //     line2: '',
        //     street: '',
        //     district: '',
        //     city: '',
        //     pincode: 0,
        //     country: '',
        //     landmark: ''
        // };
        this.address = '';
        this.DOB= '';
        this.phone='';
        this.email='';
        this.gender= '';
        this.yearOfAdmission= 0;
        this.fatherName= '';
        this.motherName= '';
        this.parentEmail= '';
        this.fatherPhone= '';
        this.motherPhone= '';
        this.teacherGuardian = '';

    }
    
  }
  