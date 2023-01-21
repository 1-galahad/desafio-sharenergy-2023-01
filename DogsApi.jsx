import React, { useState } from "react"
import Main from "../Template/Main"
import "./DogApi.module.css" 


export default function DogsApi(){
    const [imgUrl,setUrl]= useState("https://random.dog/b1e63fd1-1136-4aec-8b21-3d6e60d6134f.jpg");

    const NovoDog=()=>{

        fetch("https://random.dog/woof.json")
        .then(res=>res.json())
        .then(data=>setUrl(data.url))
        

    }
    
    return<Main icon="paw" title=" Cães"
        subtitle="Projeto do Cachorro">
            <div className="Container">
                <div className="box">                    
                    <aside className="doggy">
                        <h2>Demonstração de implementação da API Random.dog</h2>
                        
                        
                        
                        <img src={imgUrl} ></img><br></br> {/* Submetida ao "estado" do React Hook*/}
                        <button onClick={()=>NovoDog()}> Atualizar </button>
                        
                    </aside>              
                    
                </div>
            </div>
            <form>
                 
            </form> 
        </Main>
 
    
}

