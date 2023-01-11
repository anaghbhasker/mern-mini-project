import React,{ lazy,Suspense } from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
// import Admin from "./Routes/Admin";
import User from "./Routes/User";

function App() {
  const Admin= lazy(()=>import('./Routes/Admin'))
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<User/>}/>
        </Routes>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path='/admin/*' element={<Admin/>}/>
            </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
