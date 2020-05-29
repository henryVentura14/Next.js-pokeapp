 
import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../src/store'
import Search from '../src/components/search'
import ResultSearch from '../src/components/resultSearch'

function App () {
  return (
    <Provider store={store}>
      <style jsx>
      {`
        .App {
            width          : 100%;
            height         : 100vh;
            display        : flex;
            justify-content: center;
            background-color:#30475e;
          }
          
      `}
      </style>
      <div className='App'>
        <div className='row'>
          <div className='col-12 mt-4 border-top pt-3'>
            <Search />
          </div>
          <div className='col-12'>
            <ResultSearch />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App