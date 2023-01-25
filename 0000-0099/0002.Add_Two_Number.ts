/**
 * 2. 两数相加
 *
 * 题目描述
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 */

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

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    const dumy = new ListNode();
    let cur = dumy;
    let sum = 0;
    while (l1 != null || l2 != null || sum !== 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        sum = Math.floor(sum / 10);
    }
    return dumy.next;
};

const dfs = (l1, l2, carry) => {
    // 其实可以简写成 if (!l1 && !l2 && !carry)。
    // 1）下面3行是递归出口
    if (l1 === null && l2 === null && carry === 0) {
        return null;
    }

    // 2）下面7-8行是递归处理的函数体
    // 此时必定是 l1、l2或carry中存在“真值”（即有 非null 或 非0 值）
    const val_1 = l1 ? l1.val : 0,
        val_2 = l2 ? l2.val : 0,
        next_1 = l1 ? l1.next : null,
        next_2 = l2 ? l2.next : null,
        sum = (val_1 + val_2 + carry);

    let resLink = new ListNode(sum % 10);
    // 边界：别漏了 parseInt ，别的语言也需可直接 sum/10 ！
    resLink.next = dfs(next_1, next_2, Math.floor(sum / 10));

    // “本次递归”的返回值
    return resLink;
}
