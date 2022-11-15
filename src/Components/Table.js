import ReactTable from 'react-table'
import 'react-table/react-table.css'
import HOC from '../HOC'

const Table = () => {
  const{data}=HOC("https://rickandmortyapi.com/api/character");

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
        data={data.results||[]}
        columns={columns}
        pageSize={10}
        NoDataComponent={ () => <span></span> }
      />
    </div>
  )
}

export default Table