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
    var fast = head;
    var slow = head;
    var memo = [];
    var pos = 0;
    
    while(fast && slow && fast.next){
       fast = fast.next.next
       slow = slow.next
       if(fast === slow){
           return true;
       }
    }
    return false;
};