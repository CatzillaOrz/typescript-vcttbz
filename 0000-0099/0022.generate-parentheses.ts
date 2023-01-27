// backtrack & recursion
const res: Array<string> = [];
let S: string = ''
function generateParenthesis(n: number): string[] {
    function backtrack(left: number, right: number, S:string){

        if(S.length === n * 2){
            res.push(S)
            return 

        }else{
            if(left < n){
                backtrack(left + 1, right, S+"(")
            }
            if(left > right){
                backtrack(left, right + 1, S+")")
            }
        }
    }
    backtrack(0, 0, '')
    return res;
};
