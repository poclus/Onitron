export class Epr{

    id : number ;
    article_id : String ;
    description_article : String ;
    photo_article : String ;
    
    constructor(id?:number, article_id?: String, description_article?:String , photo_article?: String){
        this.id =id ;
        this.article_id = article_id ;
        this.description_article = description_article ;
        this.photo_article = photo_article ;
    
    }
    
    }