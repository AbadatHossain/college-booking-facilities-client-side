
import {  useEffect, useState } from "react";

import ClassCard from "./ClassCard";

const Classes = () => {
    
    const [getClasses, setGetClasses] = useState([])
    console.log(getClasses)
    useEffect(()=>{
        fetch('http://localhost:8000/getClasses')
        .then(res => res.json())
        
        .then(data => setGetClasses(data))
    },[])

 



  return (
    <div>
        {
            getClasses?.map(getClass => <ClassCard 
                key={getClass.id}
                getClass={getClass}> </ClassCard>)
        }
      
    </div>
  );
};

export default Classes;
