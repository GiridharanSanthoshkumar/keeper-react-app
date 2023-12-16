import React from "react";

function Inputarea(props)
{
    const [title,setTitle]=React.useState("");
    const [content,setContent]=React.useState("");
    const [inputText,setinputtext]=React.useState({
        Title:"",
        Content:"",
    });
    
function handletxt(event)
{
  const tit=event.target.value;
  setTitle(tit);
  setinputtext({...inputText,Title:tit});
  console.log(title);
   
}
function handlearea(event)
{  const co=event.target.value;
  setContent(co);
  setinputtext({...inputText,Content:co});
   
}
    return <div className="inputarea">
     <input type="text" name="title" placeholder="Title" className="txtfield" onChange={handletxt} value={title}></input>
     <textarea className="txtarea" rows="3" placeholder="Content" onChange={handlearea} value={content}></textarea>
     <button onClick={()=>{
    props.onget((inputText.Content!==""&&inputText.Title!=="")?inputText:null);
    setTitle("");
    setContent("");
    setinputtext({Title:"",
    Content:""});

     }}>add</button>


    </div>
}
export default Inputarea;