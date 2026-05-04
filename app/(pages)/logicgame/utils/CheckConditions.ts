

import { Dispatch, SetStateAction } from "react";
import { IItemSingle,IConditions,IItems, IResponse } from './interfaces'

import { problem } from "./problems";

export class HandleConditions{
   private problemId:number;

   constructor(id:number){
      this.problemId = id
   }


   checkIsEmpty(boxId:number,type:string):boolean{
      const items = problem[this.problemId].items as IItems

      for(const id in items[type]){
         if(items[type][id].Xpos === boxId){
            return false
         }
      }
   
      return true;
   }
   
   onEdge(target:IItemSingle,boxLength:number,type:string){
      if(target.Xpos !== 'null'){
         if(target.Xpos === 0 || target.Xpos === boxLength -1){
            return true
         }else{
            return false;
         }
      }else if(!this.checkIsEmpty(0,type) && !this.checkIsEmpty(boxLength-1,type)){
         return false
      }else{
         return 'default'
      }
   }

   isInPos(boxId:number,item:IItemSingle,type:string):boolean|'default'{
      if(item.Xpos !== 'null'){
         if(boxId-1 === item.Xpos){
            return true
         }else{
            return false
         }
      }else if(!this.checkIsEmpty(boxId,type)){
         //faz a checagem se tem algum elemente no box alvo
         return false;
      } else{return 'default'}
   }
   
   onRight(target:IItemSingle,onRightItem:IItemSingle){
      if(onRightItem.Xpos !== 'null' && target.Xpos !== 'null'){
         if(onRightItem.Xpos < target.Xpos){
            return true
         } else{
            return false;
         }
      }else{return 'default'}
   }
   
   onLeft(target:IItemSingle,onLeftItem:IItemSingle){
      if(onLeftItem.Xpos !== 'null' && target.Xpos !== 'null'){
         if(onLeftItem.Xpos > target.Xpos){
            return true
         } else{
            return false;
         }
      }else{return 'default'}
   }
   
   onSame(target:IItemSingle,base:IItemSingle){
      
      if(base.Xpos !== 'null' && target.Xpos !== 'null'){
         if(base.Xpos === target.Xpos){
            return true
         } else{
            return false;
         }
      }else{return 'default'}
   }
   
   isDirectlyRight(target:IItemSingle,onRigthItem:IItemSingle){
      if(onRigthItem.Xpos !== 'null' && target.Xpos !== 'null'){
         if(onRigthItem.Xpos+1 === target.Xpos){
            return true
         } else{
            return false;
         }
      }else{return 'default'}
   }
   
   isDirectlyLeft(target:IItemSingle,onLeftItem:IItemSingle){
      
      if(onLeftItem.Xpos !== 'null' && target.Xpos !== 'null'){
         if(onLeftItem.Xpos-1 === target.Xpos){
            return true
         } else{
            return false;
         }
      }else{return 'default'}
   }
   
   isOnSide(target:IItemSingle,onSideItem:IItemSingle){
      if(onSideItem.Xpos !== 'null' && target.Xpos !== 'null'){
         if(this.isDirectlyRight(target,onSideItem) || this.isDirectlyLeft(target,onSideItem)){
            return true
         }else{
            return false
         }
      }else{return 'default'}
   }
   
   isDirectlyOnSide(target:IItemSingle,onSideItem:IItemSingle){
      if(onSideItem.Xpos !== 'null' && target.Xpos !== 'null'){
         if(onSideItem.Xpos-1 === target.Xpos || onSideItem.Xpos+1 === target.Xpos){
            return true
         } else{
            return false;
         }
      }else{return 'default'}
   }
   
   isBetween(target:IItemSingle,onLeftItem:IItemSingle,onRightItem:IItemSingle){
      if(onLeftItem.Xpos !== 'null' && onRightItem.Xpos !== 'null' && target.Xpos !== "null"){
         if(target.Xpos > onLeftItem.Xpos && target.Xpos < onRightItem.Xpos){
            return true
         }else{
            return false
         }
      }else{
         return 'default'
      }
   }
   
   check(conditions:IConditions[],items:IItems,setCondition:Dispatch<SetStateAction<IConditions[]>>){
      
      
      let complete;
      function isComplete(){
        complete = true;
       for(const types in items){
          for(const info in items[types]){
              if(items[types][info].Xpos === 'null'){
                complete = false
              }
          }
       } 
      
       return complete
      }
      
      function showResult(conditionId:number,response:boolean|'default'){
        const newConditions = conditions
        newConditions[conditionId].status = response
        setCondition(newConditions)
      }
   
      let response:IResponse;
      let ok = true;
      conditions.map((val:IConditions,index)=>{
   
         if(val.type === 'inPos'){
            response = this.isInPos(val.boxNumber!,items[val.target.key!][val.target.item!],val.type)
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'onEdge'){
            response = this.onEdge(items[val.target.key!][val.target.item!],Object.keys(items[val.target.key!]).length,val.type);
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false;
               }
            }
         }
         else if(val.type === 'onRigth'){
            response = this.onRight(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'onLeft'){
            response = this.onLeft(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'onSame'){
            response = this.onSame(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'directlyRight'){
            response = this.isDirectlyRight(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'directlyLeft'){
            response = this.isDirectlyLeft(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'onSide'){
            response = this.isOnSide(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'directlyOnSide'){
            response = this.isDirectlyOnSide(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }else if(val.type === 'isBetween'){
            response = this.isBetween(items[val.target.key!][val.target.item!],items[val.ref!.key!][val.ref!.item!],items[val.secRef!.key!][val.secRef!.item!])
            if(response !== null){
               showResult(index,response)
               if(!response){
                  ok = false
               }
            }
         }
      })
   
      
      if(ok && isComplete())
         return true;
      
   }

}
