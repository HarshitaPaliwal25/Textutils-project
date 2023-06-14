const Layout=(props)=>{
    return(
        <div id="header">
            <h1>My header{props.myattribute}</h1>
        </div>
    )
}
export default Layout
// class Layout extends React.Component{
//      constructor(){
//         super()
//         this.state={
//             name:"test",
//             counter:0
//         }
//      }

//      incrementCounter=()=>{
//         this.setState((prev)=>({
//             counter:prev.counter+1
//         }))
//      }
//      componentDidMount(){
//         setTimeout(this.incrementCounter,1000)
//      }

//      componentDidUpdate(){
//         setTimeout(this.incrementCounter,1000)
//      }
//      componentWillUnmount(){
//         console.log("Unmounting");
//      }
//      render(){

//      }
//      }
