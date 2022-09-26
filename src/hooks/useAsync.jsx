import { useEffect } from "react"


export const useAsync = (
  setLoading,
  asyncFn, //promesa
  successFn, //modificador
  errorFn,
  dependencies = [], 
  finallyFn,
  returnFn

) =>{

  useEffect(() => {
    setLoading(true)

    let isActive = true
    
    asyncFn().then((result) => {
      if(isActive) successFn(result)
    }).catch( (error) => {
      if(errorFn){
        errorFn(error)
      }
    }).finally(() => {
      if(finallyFn){
        finallyFn()
      }
      if(isActive) setLoading(false)
    })

    return () => {
      if(returnFn){
        returnFn()
      }
      isActive = false
    }

  }, dependencies)
}