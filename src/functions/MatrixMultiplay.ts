const MultyplayMatrix=(InversMat:any,ResaultMat:any,equationNum:number)=>{
  let i,j;
  let res:number[]=[];
   
  for(i=0;i<equationNum;i++){
    res[i]=0;
    for(j=0;j<equationNum;j++){
      res[i]+=InversMat[i][j]*ResaultMat[j];
    }
  }
   
return res;
}

export default MultyplayMatrix