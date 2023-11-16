export class Project {

    id: number | undefined;
    name: string;
    description: string;
    technos: string[];
    link: Links | undefined;
    

    constructor (
        name: string = "Nom du projet",
        description: string,
        technos: string[]
    ) {
        this.name = name;
        this.description = description;
        this.technos = technos;
    }
    
    
}

class Links {
    github: string;
    demo?: string | undefined;

    constructor (
        github: string,
        demo: string  | undefined = ""
    ) {
        this.github = github
        this.demo = demo
    }
}