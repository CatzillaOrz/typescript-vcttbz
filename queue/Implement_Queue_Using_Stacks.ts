class MyQueue {
    stk1: number[];
    stk2: number[];

    constructor() {
        this.stk1 = [];
        this.stk2 = [];
    }

    push(x: number): void {
        this.stk1.push(x);
    }

    pop(): number {
        this.move();
        return this.stk2.pop();
    }

    peek(): number {
        this.move();
        return this.stk2[this.stk2.length - 1];
    }

    empty(): boolean {
        return !this.stk1.length && !this.stk2.length;
    }

    move(): void {
        if (!this.stk2.length) {
            while (this.stk1.length) {
                this.stk2.push(this.stk1.pop());
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_3 = obj.peek()
var param_2 = obj.pop()
var param_4 = obj.empty()
console.log(obj)
console.log(param_2)
console.log(param_3)
console.log(param_4)

/**
 * @vim tips: Quick Vim Tips to Generate and Increment Numbers
 * - Using VISUAL BLOCK mode (<C-v>), go down 8 times (<C-v>8j) to visually select all 0's.
 * - Now type g <C-a>. Voila!
 * 
 */
