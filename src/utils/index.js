export const co = (fn)=>{
    return new Promise((resolve)=>{
        fn.then((res)=>{
            resolve([null,res])
        })
        .catch((err)=>{
            resolve([err,null])
        })
    })
}