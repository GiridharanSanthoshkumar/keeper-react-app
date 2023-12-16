import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Writenote from "./Writenote";

import Inputarea from "./Inputarea";



function App()
{
    const [notes,setnotes]=React.useState([]);
    function addnote(inputText){
        (inputText!==null)&&setnotes([...notes,inputText]);

        
        

    console.log(inputText);
    }
    function deletenote(i)
    {   
        console.log(i);
        setnotes(notes.filter((note,indexi) => (indexi!=i)));

        
    }
   
    return <div className="app"><Header /> 
      <Inputarea  onget={addnote}/>
      { notes.map((note,index)=>{
        return (<Writenote 
        ondel={deletenote}
        key={index}
        indi={index}
        title={note.Title}  body={note.Content}></Writenote>);
       })
       }
       

     <Footer /> </div>
}
export default App;