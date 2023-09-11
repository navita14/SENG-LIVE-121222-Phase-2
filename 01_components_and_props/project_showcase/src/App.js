function App(props) {  //// or ({ title, message}) and remove props in the function
  return (
  <div> 
    <h1 className="header">{props.title}</h1>  
    <h2>{props.message}</h2>
    <p>Hello React</p>
  </div>
  )
}

export default App;