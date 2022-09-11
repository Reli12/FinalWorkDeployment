import { inv } from "mathjs"
import create from "zustand"
//import inverse from "../functions/MatrixInverse"
import MultyplayMatrix from "../functions/MatrixMultiplay"


interface Store {
    inverse:any
    printResault:any
    finalResault:any
    setInverse: (matrix:any) => void 
    flag: number
    setFlag: (flag: number) => void
    setFinalResaultPrint:(matrix:any)=>void
    matrixPrint:any
    setPrintMatrix: (matrix:any) => void 
    setPrintResault: (matrix:any) => void 
}


const useStore = create<Store>((set) => ({
    inverse: [] as any,
    matrixPrint: [] as any,
    printResault: [] as any,
    flag:0,
    finalResault:[]as any,
    setInverse:(matrix:any)=>{
        set({inverse:inv(matrix)})
    },
    setPrintMatrix:(matrix:any)=>{
    let matrrixA=matrix.slice()
    set({matrixPrint:matrrixA})
    },
    setPrintResault:(matrixResault:any)=>{
    let matrrixR=matrixResault.slice()
    set({printResault:matrrixR})
    },
    setFlag(flag) {
        set({flag:flag})
    },
    setFinalResaultPrint:(matrixFinalRes:any)=>{
        console.log(matrixFinalRes+"this shit")
        set({finalResault:matrixFinalRes.slice()})
    },
}))

export default useStore