

function Heading(props) {
     
    
    return (  
        <> 
<div className="container">  
    <h2 style='display:inline'>
        Hello 
    </h2> 
      <h2 style='display:inline'><code> {props.name} </code>   </h2>  
 
        <h2 style='display:inline'> Welcome to React </h2>
</div> 

</>
    )
} 
export  default Heading;