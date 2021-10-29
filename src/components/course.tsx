export class Course {
    private name: string;
    private credits: number;
    private description: string;
    private prereq: [Course];

    constructor(name:string, credits: number, description: string, prereq?: [Course]){
        this.name = name;
        this.credits = credits;
        this.description = description;
        if (prereq){
            this.prereq = prereq;
        }
        else{        
            this.prereq = [new Course("None!", 0, "No prerequisites for this course!")];
        }
    }
    get cName(): string{
        return this.name;
    }
    set cName(name: string)
    {
        this.name = name;
    }
    get cCredits(): number{
        return this.credits;
    }
    set cCredits(credits: number){
        this.credits = credits;
    }
    get cDescription(): string{
        return this.description;
    }
    set cDescription(description: string){
        this.description = description;
    }
    get cPrereq(): [Course]{
        return this.prereq;
    }
    set cPrereq(prereq: [Course]){
        this.prereq = prereq;
    }
}