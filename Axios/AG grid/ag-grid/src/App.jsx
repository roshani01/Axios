
/*import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';
import './App.css'

import DATA from './Student.json';
//console.log(DATA)
function App() {
  
  const [rowData,setrowData] =useState([...DATA]);
  const [columns,setcolumns] =useState([
    {field:"name",flex:1 },
    {field:"email", flex:1},
    {field:"phone" ,flex:1},
    

  ])

  return (
    <>
      <div className="ag-theme-quartz-dark" style={{height:500}}>
    <AgGridReact rowData={rowData} columnDefs={columns}/>
</div>
</>
  )
}

export default App;*/

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';
import './App.css';

import DATA from './Student.json';

function App() {
  const [rowData, setRowData] = useState([...DATA]);
  const [columns, setColumns] = useState([
    { field: "name", headerName: "Name", flex: 1 ,filter:true,editable:true,checkboxSelection:true},
    { field: "email", headerName: "Email", flex: 1},
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field:"view" ,
      cellRenderer:() =>{
        return <V/>
      },
    }
  ]);
  const V =()=><button onClick={()=>alert("No Profile View")}>View</button>
  return (
    <>
      <div className="ag-theme-quartz-dark" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={columns}   pagination={true} paginationPageSize={2}/>
      </div>
    </>
  );
}

export default App;


