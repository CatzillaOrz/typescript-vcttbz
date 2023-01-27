// backtrack & recursion
/*
const res: Array<string> = [];
let S: string = ''
function generateParenthesis(n: number): string[] {
    function backtrack(left: number, right: number, S: string) {
        if (right > left) return;
        if (S.length === n * 2) {
            res.push(S)
            return

        } else {
            if (left < n) {
                backtrack(left + 1, right, S + "(")
            }
            if (left > right) {
                backtrack(left, right + 1, S + ")")
            }
        }
    }
    backtrack(n, n, '')
    return res;
};
*/
const generateParenthesis = (n) => {
    const res = []; // 输出的结果数组

    const generate = (str, left, right) => {
        if (str.length == 2 * n) { // 字符串构建完成
            res.push(str);           // 将字符串加入res
            return;                  // 结束当前递归（结束当前搜索分支）
        }
        if (left > 0) {            // 只要左括号有剩，可以选它，继续递归做选择
            generate(str + '(', left - 1, right);
        }
        if (right > left) {        // 右括号的保有数量大于左括号的保有数量，才能选右括号
            generate(str + ')', left, right - 1);
        }
    };

    generate('', n, n); // 递归的入口，初始字符串是空字符串，初始括号数量都是n
    return res;
};
