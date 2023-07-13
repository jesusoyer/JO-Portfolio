import aboutMeCss from "./aboutMeCss";

const AboutMe: React.FC = () => {
const { skills } = aboutMeCss;
    


    return (
      
      <div className="col-span-12  w-screen h-[500px] p-2">
            <h1 className=" mx-auto mb-14 font-semibold text-4xl font-bold mb-28">ABOUT ME</h1>
            <p className="text-center w-8/12 mx-auto text-gray-500">
            As a Frontend Web Developer, I specialize in building the frontend of websites and web applications. You can see projects I have worked on in the projects section.<br></br>I am actively seeking new job opportunities that challenge me to expand my skills and knowledge. If you have an opportunity that matches my experience and interests, please feel free to contact me.
            </p>
            <div className="flex justify-between mx-72 mt-4">
              <div className={skills}>HTML</div>
              <div className={skills}>CSS</div>
              <div className={skills}>JavaScript</div>
              <div className={skills}>REACT.js</div>
              <div className={skills}>TypeScript.js</div>
            </div>
            <div className="flex justify-between mx-72 ">
              <div className={skills}>Node.js</div>
              <div className={skills}>Express.js</div>
              <div className={skills}>SQL</div>
              <div className={skills}>MongoDB</div>
              <div className={skills}>Tailwind CSS</div>
            </div>
          </div>
            
            
  
  
    );
  }
  
  export default AboutMe;