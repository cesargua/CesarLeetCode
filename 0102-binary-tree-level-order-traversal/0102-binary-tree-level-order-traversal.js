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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(!root){
        return []
    }
    
    var levelOrdTrav = [];
    
    var curr = root;
    var list= []
    list.push(root.val)
    levelOrdTrav.push(list)
    var traverse = ((curr = root, level = 1)=>{
        if(levelOrdTrav[level] === undefined)
            levelOrdTrav[level] = []
        
        if(curr.left) levelOrdTrav[level].push(curr.left.val)
        if(curr.right) levelOrdTrav[level].push(curr.right.val)
        
        if(curr.left){
            traverse(curr.left, level+1)
        }
        if(curr.right){
            traverse(curr.right, level+1)
        }
        // levelOrdTrav.push(level)
    })
    traverse()
    levelOrdTrav= levelOrdTrav.filter(nodes => nodes.length>0)
    
    console.log(levelOrdTrav)
    return levelOrdTrav
    
};