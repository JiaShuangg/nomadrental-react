import React , { useEffect } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import withHOC from './actions'

const Table = (props) => {

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

  useEffect(() => {
    props.getCharacters()
  },[])

  return(
    <div>
      <ReactTable
        data={props.characters}
        columns={columns}
        pageSize={10}
        NoDataComponent={ () => <span></span> }
      />
    </div>
  )
}

export default withHOC(Table)