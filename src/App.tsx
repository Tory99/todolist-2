import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { appContainer, board, buttons } from './App.css'

function App() {

  return (
    <div className={appContainer}>
      <div className={board}>
        
      </div>

      <div>
        <button className={buttons}>
          게시판 삭제하기
        </button>
        <button>
          
        </button>
      </div>
    </div>
  )
}

export default App
