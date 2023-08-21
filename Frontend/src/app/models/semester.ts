export class Semester {
    credits: number;
    semName: string;
    year: number;
    status: string;
    semId: number;

    constructor(){
        this.semName = '',
        this.year=0,
        this.status='',
        this.credits=0,
        this.semId=0;
    }
}
