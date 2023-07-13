import './App.css';
import NavBar from './components/NavBar';
import './index.css';


const App: React.FC = () => {
  return (
    <div className="App">
    <nav><NavBar /></nav>
   
 <div >
      <main className="container  ">
        {/* Use a 12-column layout */}
        <div className="grid grid-cols-12">

<div className="flex  bg-slate-200 ">
    <aside className="h-[800px] sticky top-64 col-span-8">
         Fixed Sidebar
    </aside>
    
</div>
          {/* Main Content - uses 8-colspan*/}
          <div className="col-span-11 bg-gray-50 w-screen h-[800px] p-2">
            <h1>Article Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
              exercitationem aliquid deleniti esse vel atque impedit, sapiente
              quis. Beatae, deserunt molestias!
            </p>
          </div>
          {/* Sidebar - uses 4 col span */}
          <div className="col-span-12 bg-indigo-50 w-screen h-[500px] p-2">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
              exercitationem aliquid deleniti esse vel atque impedit, sapiente
              quis. Beatae, deserunt molestias!
            </p>
          </div>

          <div className="col-span-12 bg-gray-50 w-screen h-[500px] p-2">
            <h1>Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
              exercitationem aliquid deleniti esse vel atque impedit, sapiente
              quis. Beatae, deserunt molestias!
            </p>
          </div>

          <div className="col-span-12 bg-indigo-50 h-[500px] w-screen p-2">
            <h1>contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
              exercitationem aliquid deleniti esse vel atque impedit, sapiente
              quis. Beatae, deserunt molestias!
            </p>
          </div>

          <div className="col-span-12 bg-black h-[200px] p-2 w-screen text-white">
            <h1>footer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
              exercitationem aliquid deleniti esse vel atque impedit, sapiente
              quis. Beatae, deserunt molestias!
            </p>
          </div>
          
        </div>
        
      </main>
    </div>
   
</div>











    



  );
}

export default App;
