export class User{

    id : number ;
    email : string ;
    public_key : string ;
    password : string ;
    
    constructor(id?:number, email?: string, public_key?:string , password?: string){
        this.id =id ;
        this.email = email ;
        this.public_key = public_key ;
        this.password = password ;
    
    }
    
    }