import React from 'react'
import AddFood from './pages/AddFood/AddFood'

const App = () => {
  return (
     <div className="d-flex" id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
                <Menubar/>
                <div className="container-fluid">
                    <Routes>
                        <Route path='/add' element={<AddFood/>}/>
                        <Route path='/list' element={<ListFood/>} />
                        <Route path='/orders' element={<Orders/>} />
                        <Route path='/' element={<ListFood/>} />
                    </Routes>
                </div>
            </div>
        </div>

  )
}

export default App