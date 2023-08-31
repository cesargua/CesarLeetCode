/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var curr = head;
    var memo = [];
    var pos = 0;
    
    while(curr){
        if(memo.find((elem)=>elem===curr) === undefined){
            console.log('new value:', curr.val)
            memo.push(curr);
        } else{
            return true;
        }
        
        curr = curr.next
    }
    return false;
};