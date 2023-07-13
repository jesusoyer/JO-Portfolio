import landingSectionCss from "./landingSectionCss"

const LandingSection: React.FC = () => {

    const {  buttonCss } = landingSectionCss;


  return (

    
        
          <div className="col-span-11  w-screen p-2">
            <div className="flex flex-col justify-center mr-40">

            <h1 className="my-24 mx-auto font-semibold text-4xl font-bold">Hello, I'm Jesus Oyervides</h1>
            <p className="text-center w-8/12 mx-auto text-gray-400">
            I am a full stack web developer who creates web applications using React.js, TypeScript, JavaScript, MongoDB, Express.js, and Node.js. I have utilized these technologies to build responsive web applications that enhance the user experience.
            </p>
           
            </div>
            <button type="button" className={buttonCss}>Project</button>

          </div>
          


  );
}

export default LandingSection;