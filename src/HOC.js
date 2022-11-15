import {useEffect,useState} from 'react'
import axios from 'axios'
import 'react-table/react-table.css'

function HOC (url) {
  const [data,setData]= useState({})

  useEffect(()=>{
    axios
      .get(url)
      .then(res =>{
        setData(res.data)
      })
  },[url])

  return{data}
}

export default HOC

