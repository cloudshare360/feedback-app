import Header from './components/Header'

function App() {
  return (
    <>
      <Header text="Header Text" bgColor="blue" textColor="white" />
      <Header text="Default with out bgcolor and textcolor" />
      <Header bgColor="blue" textColor="white" />

      <div className='container'>
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
