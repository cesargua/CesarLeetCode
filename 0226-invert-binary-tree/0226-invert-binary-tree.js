/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(!root){
        return root;
    }
    
    //build a recursive function 
    var recurseTree = (curr = root) => {
        if(!curr){
            return; 
        }
        // console.log('current node: ', curr);
        // console.log('left node: ', curr.left);
        // console.log('right node: ', curr.right);
        var new_root = new TreeNode(curr.val, curr.right, curr.left);        
        if(curr.left) {
            new_root.right =recurseTree(curr.left);  
        }
        if(curr.right) {
            new_root.left = recurseTree(curr.right);  
        }
        return new_root;
    }
    
    return recurseTree();
};