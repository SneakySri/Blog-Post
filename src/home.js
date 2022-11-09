import React from "react";
import img from './resources/images1.jpg';
import img2 from './resources/images2.jpg';
import img3 from './resources/img3.webp';
import img4 from './resources/image4.jpg';

import c1 from './resources/course1.jpg';
import c2 from './resources/course2.jpg';
import c3 from './resources/course3.jpg';

import Card from './Comp1';
import Box from './Comp2';

const Home = () =>{
    return(
        <div className="ui comment">
      <div className="ui stackable four column grid">
        
           
            <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>
            <div className="column"><Box> <Card  name="PYTHON" desc="most important for data Science " price="10000 only" image={c2} /> </Box></div>
            <div className="column"><Box> <Card  name="C++" desc="Advanced version of C" price="5000 only" image={c3} /> </Box></div>
            <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>

            <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>
            <div className="column"><Box> <Card  name="PYTHON" desc="most important for data Science " price="10000 only" image={c2} /> </Box></div>
            <div className="column"><Box> <Card  name="C++" desc="Advanced version of C" price="5000 only" image={c3} /> </Box></div>
            <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>

             <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>
            <div className="column"><Box> <Card  name="PYTHON" desc="most important for data Science " price="10000 only" image={c2} /> </Box></div>
            <div className="column"><Box> <Card  name="C++" desc="Advanced version of C" price="5000 only" image={c3} /> </Box></div>
            <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>

             <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>
            <div className="column"><Box> <Card  name="PYTHON" desc="most important for data Science " price="10000 only" image={c2} /> </Box></div>
            <div className="column"><Box> <Card  name="C++" desc="Advanced version of C" price="5000 only" image={c3} /> </Box></div>
            <div className="column"><Box> <Card  name="TESTING" desc="seats almost full grab yours" price="12000 only" image={c1} /> </Box></div>            
           
      </div>
    </div>
    
        
    )
}
export default Home