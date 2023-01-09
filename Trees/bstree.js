//Basic structure for tree 


//this node class add a default all node as a null or iniatialize a node by left and right it's a null set
//this.value it's a parent node
class node{
    constructor(val){
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  
  //This class for a main functionallity on tree 
  class bstree{
    //this constructor set a node dafault as a null
     constructor(){
       this.root = null;
     }
     //this function check a node tree empaty or not
     isTreeEmpty(){
       return this.root === null;
     }
  }


  //call a class trough the class
  let bst = new bstree();
  console.log(bst.isTreeEmpty())