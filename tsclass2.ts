interface mylove
{
    s:number;
    t:string;
    mydear();
}
class A implements mylove
{
    s:number;
    t:string;
    constructor(s: number,t: string) 
    {
        this.s=s;
        this.t=t;
    }
    mydear()
    {
        console.log("Value of s: "+this.s+" Value of t: "+this.t);
    }
}
let o=new A(1,"Anirudh");
o.mydear()