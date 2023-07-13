import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import {GrFacebook} from "react-icons/gr";
import {GrMailOption} from "react-icons/gr";
import {GrResume} from "react-icons/gr";

const FixedSidebar: React.FC = () => {

    


    return (
      
        <div className="flex w-10 sticky  ">
        <aside className="h-[400px] top-64 col-span-8 mt-10">
             <GrLinkedin size={32} style={{color: 'blue'}}/>
            <GrGithub size={32} style={{color: 'black'}} />
            <GrFacebook size={32} style={{color: 'blue'}}/>
            <GrMailOption  size={32} style={{color: 'blue'}} />
            <GrResume size={32} style={{color: 'black'}}/>
        </aside>
        
    </div>
  
  
    );
  }
  
  export default FixedSidebar;