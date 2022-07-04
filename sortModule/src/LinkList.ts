import Sorter from "./Sorter";

class Node{
    next:Node|null=null;
    constructor(public value:number,){
        this.value=value
    }
};

export default class LinkList extends Sorter{
    head:Node|null=null;
    add = (numbre:number):LinkList=>{
        const node = new Node(numbre);
        if(!this.head){
             this.head = node;
             return this
            }
        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }
        tail.next  = node;
        return this
    };
   get length():number{
    if(!this.head) return 0;
    let length = 1
    let node = this.head;
    while(node.next){
        length+=1;
        node = node.next;
    }
    return length
   };
   at = (index:number):Node=>{
    if(!this.head){
        throw new Error('Index out of boundary')
    }
    let targetNode:Node = this.head;
    for(let count=0;count!==index;count++){
        if(!targetNode.next){
            throw new Error('Index out of boundary')   
        }
        targetNode = targetNode.next
    }
    return targetNode;
   }
   compare = (leftIndex:number,rightIndex:number):boolean=>{
    return this.at(leftIndex).value>this.at(rightIndex).value;
   }
   swap = (leftIndex:number,rightIndex:number):void=>{
        let tempNodeValue = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = tempNodeValue;
   }
   print = ():void=>{
    let linkarray:number[] = []
    if(!this.head) {
        console.log(linkarray);
        return
    }
    let node = this.head
    while(node.next){
        linkarray.push(node.value);
        node = node.next;
    }
    linkarray.push(node.value);
    console.log(linkarray)
   }

}