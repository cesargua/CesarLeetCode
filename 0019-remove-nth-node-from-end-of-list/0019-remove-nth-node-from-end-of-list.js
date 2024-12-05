/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // console.log()

    //keep a iteration counter
    var iter = 0

    //count the number of nodes in the linked list
    var curr1 = head;
    var size = 0;

    while(curr1 != null){
        size++;
        curr1 = curr1.next;
    }

    console.log("Number of nodes: ", size);

    //then calculate how many nth step you need for the next loop
    var steps = size-n;

    if(size == 1){
        return null;
    }

    if(size == n){
        return head.next;
    }


    var iter = 0;
    //start a while loop, continue until head.next is null
    var curr = head;
    while(curr != null){
        //if next is the nth node to delete
        if(iter == steps-1){
            //reassign the next node to the next, next node
            var temp = curr.next
            curr.next = curr.next.next

            //break out of loop
            break;
        }
        curr = curr.next;
        iter++;
    }
    
    return head
};