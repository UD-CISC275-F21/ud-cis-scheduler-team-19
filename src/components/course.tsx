export class Course {
    private name: string;
    private credits: number;
    private description: string;
    private prereq: [Course?];
    private reveal: boolean;

    constructor(name:string, credits: number, description: string,reveal: boolean, prereq?: [Course?]){
        this.name = name;
        this.credits = credits;
        this.description = description;
        this.reveal = reveal;
        if (prereq){
            this.prereq = prereq;
        }
        else{        
            this.prereq = [];
            return;
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
    get cPrereq(): [Course?]{
        return this.prereq;
    }
    set cPrereq(prereq: [Course?]){
        this.prereq = prereq;
    }
    get isReveal(): boolean{
        return this.reveal;
    }
    set isReveal(reveal: boolean){
        this.reveal = reveal;
    }
}

var cisc100 = new Course("cisc100", 3, "this is a beginner sample class!",false);
var cisc200 = new Course("cisc200", 3, "this is an intermediate sample class!",false, [cisc100]);
console.log(cisc100.cName, cisc100.cCredits, cisc100.cDescription);
console.log(cisc200.cName, cisc200.cCredits, cisc200.cDescription, cisc200.cPrereq);