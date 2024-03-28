import "./App.css";
import {useState} from "react";

function App() {
    
    const [selectedTab, setSelectedTab] = useState(0);
    
    const tabData = [
        {
            name: 'Home',
        },{
            name: 'Search',
        },{
            name: 'Cart',
        },{
            name: 'Orders',
        },{
            name: 'Profile',
        },{
            name: 'Support',
        },{
            name: 'Chat',
        },
    ]
    
    const color = 'pink'
    
   function onTabChange(index) {
        setSelectedTab(index)
   }
  
    
  return (
      <>
          
          
          
          <div className={`flex justify- h-14  bg-gray-200`}>
              {tabData.map((tab, index) => <div onClick={() => onTabChange(index)} key={tab.name}
                  className={` ${selectedTab === index  && 'font-semibold text-white   bg-purple-600'} p-2  cursor-grabbing text-sm  flex flex-1 items-center justify-center `}>
                  {tab.name}
              </div>)}
              
              {/*<div*/}
              {/*    className={"p-2 gap-2 cursor-grabbing  font-semibold text-sm flex flex-1 items-center justify-center bg-white rounded-xl"}>*/}
              {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">*/}
              {/*        <path*/}
              {/*            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/>*/}
              {/*        <path*/}
              {/*            d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/>*/}
              {/*    </svg>*/}
              {/*    */}
              {/*    Home*/}
              {/*</div>*/}
              {/*<div className={"p-2 gap-2 cursor-grabbing text-sm flex flex-1 items-center justify-center "}>*/}
              {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">*/}
              {/*        <path fillRule="evenodd"*/}
              {/*              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"*/}
              {/*              clipRule="evenodd"/>*/}
              {/*    </svg>*/}
              {/*    */}
              {/*    Search*/}
              {/*</div>*/}
              {/*<div className={"p-2 cursor-grabbing text-sm  flex flex-1 items-center justify-center "}>*/}
              {/*    Contacts*/}
              {/*</div>*/}
              
              {/*<div className={"p-2 cursor-grabbing text-sm  flex flex-1 items-center justify-center "}>*/}
              {/*    Profiles*/}
              {/*</div>*/}
              {/*<div className={"p-2 cursor-grabbing text-sm  flex flex-1 items-center justify-center "}>*/}
              {/*    Support*/}
              {/*</div>*/}
          </div>
      
      
      </>
  
  );
}

export default App;
