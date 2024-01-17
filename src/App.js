import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Subscribe from './assets/Subscription/Subscribe';
import Loarder from './Components/Loarder/Loarder';
import SignIn from './Components/Sign In/Sign-In';
import SignUp from './Components/SignUp/SignUp';
import News from './Components/News/News'
import AboutUs from './Components/AboutUs/AboutUs';
import Programs from './assets/Programs/Programs';
import Embedded from './assets/Directory/Emb-system/Embedded';
import MachineL from './assets/Directory/MachineL/Machine'
import Robotics from './assets/Directory/Robotics/Robotics';
import Software from './assets/Directory/SoftwareD/Software';
import Virtual from './assets/Directory/V-Reality/V-Reality';
import Electrical from './assets/Directory/Electrical/Electrical';
import SpaceEng from './assets/Directory/SpaceE/SpaceE';
import CloudComp from './assets/Directory/Cloud/Cloud';
import ExtendedReality from './assets/Directory/Ext-reality/Ext-reality';
import Edge from './assets/Directory/Edge/Edge';
import Artificial from './assets/Directory/Intelligence/Intelligence';
import Security from './assets/Directory/Security/Security';
import Printing from './assets/Directory/3D/Printing';
import Design from './assets/Directory/Design/Design';
import Farm from './assets/Directory/Farm/Farm';


function App() {
  return (
    <Fragment>

<Routes>
<Route index element={<Loarder/>} />
<Route path='/sign-up' element={<SignUp/>} />
<Route path='/sign-in' element={<SignIn/>} />
<Route path='/subscription' element={<Subscribe/>} />
<Route path='/news' element={<News />} />
<Route path='/AboutUs' element={<AboutUs/>} />
<Route path='/Classes' element={<Programs/>} />
<Route path='/embed' element={<Embedded/> } />
<Route path='/robotic' element={<Robotics/>} />
<Route path='/Machine-Learning' element={<MachineL/>} />
<Route path='/software Engineering' element={<Software/> } />
<Route path='/Virtual Reality' element={<Virtual/>} />
<Route path='/Electrical Mobility' element={<Electrical/> } />
<Route path='/Space Engineering' element={<SpaceEng/>} />
<Route path='/Cloud Computing and IoT' element={<CloudComp/>} />
<Route path='/Extended Reality' element={<ExtendedReality/>} />
<Route path='/Cybersecurity' element={<Security/>} />
<Route path='/Digital Design' element={<Design/> } />
<Route path='/Artificial Intelligence' element={<Artificial/>} />
<Route path='/Climate Change' element={<Embedded/> } />
<Route path='/GPT-3' element={<Embedded/> } />
<Route path='/Satellite Constellation' element={<Embedded/> } />
<Route path='/3D Printing' element={<Printing/> } />
<Route path='/Lithium Metal Batteries' element={<Embedded/> } />
<Route path='/Edge Computing' element={<Edge/>} />
<Route path='/Floating Farms' element={<Farm/> } />





</Routes>

    </Fragment>
  );
}

export default App;
