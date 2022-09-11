import React from "react";
/*function det(M: number[][]) {
    if (M.length == 2) {
      return M[0][0] * M[1][1] - M[0][1] * M[1][0];
    }
    var answer = 0;
    for (var i = 0; i < M.length; i++) {
      answer += Math.pow(-1, i) * M[0][i] * det(deleteRowAndColumn(M, i));
    }
    return answer;
  }

  function deleteRowAndColumn(M: Array<any>, index: number) {
    var temp = [];
    for (var i = 0; i < M.length; i++) {
      temp.push(M[i].slice(0));
    }
    temp.splice(0, 1);
    for (var i = 0; i < temp.length; i++) {
      temp[i].splice(index, 1);
    }
    return temp;
  }
*/
const det = (m:any) => 
  m.length == 1 ?
  m[0][0] :
  m.length == 2 ? 
  m[0][0]*m[1][1]-m[0][1]*m[1][0] :
  m[0].reduce((r: number,e: number,i: number) => 
    r+(-1)**(i+2)*e*det(m.slice(1).map((c: any[]) => 
      c.filter((_: any,j: any) => i != j))),0)

  export default det