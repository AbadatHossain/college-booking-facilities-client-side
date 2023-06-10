import { useEffect, useState } from "react";

import MenuItem from "../MenuItem/MenuIem";
import SectionTitle from "../../components/SectionTitle";


const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
    //   .then((data) => console.log(data))
      .then((data) => {
        const poparData = data.filter(item => item.category === "Football")
        setMenu(poparData)
      });
  }, []);


  return (
    <section>
      <SectionTitle
        heading={"From  our Game"}
        subHeading={"Popular Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => 
          <MenuItem 
          key={item._id} 
          item={item}
          
          >
           </MenuItem>
          
        )}
         
      </div>
    </section>
  );
};

export default PopularMenu;
