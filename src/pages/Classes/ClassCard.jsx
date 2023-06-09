// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const ClassCard = (props) => {
    const {getClass} = props
    const user = useContext(AuthContext)

    const handleSelect = (getClass)=>{
    
        // getClass.email = user?.user?.email
        console.log(getClass)

        fetch(`http://localhost:8000/getClasses`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(getClass),
          })
            .then(res => res.json())
            .then(data => console.log(data))
        
    }

    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={getClass.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleSelect(getClass)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default ClassCard;