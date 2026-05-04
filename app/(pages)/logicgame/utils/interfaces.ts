export interface IItems {
    [index:string]:{
        [index:string]:IItemSingle
    }
}

export interface IItemSingle{
        available:boolean,
        Xpos:number | 'null'  
}

type ITypes = 'inPos'|'onRigth'|'onLeft'|'onSame'|'directlyRight'|'directlyLeft'|'onSide'|'directlyOnSide'|'isBetween'|'onEdge';

interface IItem{
    key?:string,
    item?:string
}

export interface IConditions{
    hint:string,
    status:boolean | 'default',
    type:ITypes,
    target:IItem
    boxNumber?:number,
    ref?:IItem,
    secRef?:IItem
}

export interface IProblem{
    condition:IConditions[],
    name:string,
    descricao:string,
    boxName:string
    items:{
        [key:string]:{
            [key:string]:IItemSingle
        }
    }
}

export type IResponse = boolean | 'default'