/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // list1 & list2 null should use ListNode to determine is null or not
    // mistake: use list1.next == null | list2.next == null will not work
  if(list1 === null){
      return list2
  }
  if(list2 === null){
      return list1
  }

  if(list1.val < list2.val){
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
  }else{
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
  }

};
