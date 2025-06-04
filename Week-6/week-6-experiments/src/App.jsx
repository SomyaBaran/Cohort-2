function App() {


  return (
    <> 
      <Header title="title1"></Header>
      <Header title="title2"></Header>
    </>
  )
}
function Header({ title }) { // {title} --> this type of syntax is called destructuring
  //function(props){
  // return <div>
  // props.title
  // </div>
  //}
  return <div>
    {title}
  </div>
}

export default App;
