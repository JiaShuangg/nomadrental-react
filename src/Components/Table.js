import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css"

const Table = () => {
  const [posts,setPosts]= useState({});

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res =>{
        console.log(res.data)
        setPosts(res.data)
      })
    },[]);

    const columns = [{  
        Header: 'ID',  
        accessor: 'id'  
      },{  
        Header: 'Name',  
        accessor: 'name'  
      },{  
        Header: 'Species',  
        accessor: 'species'  
      },{
        Header: 'Gender',  
        accessor: 'gender'
      },{
        Header: 'Origin',  
        accessor: 'origin.name'
      },{
        Header: 'Location',  
        accessor: 'location.name'
      },{
        Header: 'Status',  
        accessor: 'status'
      }
    ]  
  
  return (
    <div>
      <ReactTable
        data={posts.results||[]}
        columns={columns}
        pageSize={10}
        NoDataComponent={ () => <span></span> }
      />
    </div>
  );
}

export default Table;