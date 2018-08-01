export class Post {
    public title : string;
    public content : string;
    public loveIts : number;
    public created_at;
    constructor(title,content,loveIts){
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = new Date();
    }
}
