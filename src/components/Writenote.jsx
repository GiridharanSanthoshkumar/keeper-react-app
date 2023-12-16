import React from "react";
function Writenote(props)
{
   
return <div className="note"><p>{props.title}</p>
<p>{props.body}</p>
<button className="del" onClick={()=>{
    props.ondel(props.indi)
}}>delete</button>
</div>;

}
export default Writenote;