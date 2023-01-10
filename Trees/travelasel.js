class node{
    constructor(value=0, left=null,right=null){
        this.value=value
        this.left=left
        this.right=right
    }
}

const root = new node(10,new node(20, new node(30),new node(22)),new node(44,new node(70)));

console.log(root);


function preorder(root){
    if(root){
        console.log(root.value)
        preorder(root.left);
        preorder(root.right);
    }
}
console.log(preorder(root))