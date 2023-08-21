export class Department {
    hod: string;
    staffCount: number;
    phone: string;
    email: string;
    description: string;
    deptId: number;
    deptName: string;

    constructor(){
        this.description = '',
        this.email='',
        this.phone='',
        this.hod='',
        this.staffCount=0
        this.deptId=0;
        this.deptName='';
    }

}


// private long deptId;

// private String deptName;
// private String HOD;
// private int staffCount;
// private String phone;
// private String email;
// private String Description;