class ParentClass
{
    protected j:number;
    constructor(k:number)
    {
        this.j=k;
    }
}
class ChildClass extends ParentClass
{
    l:number;
    constructor(m:number,k:number)
    {
        super(k);
        this.l=m;
    }
    value()
    {
        return("Value of parent class= "+this.j+" Value of Child class= "+this.l)
    }
    
}
let obj=new ChildClass(12,24);
console.log(obj.value());
