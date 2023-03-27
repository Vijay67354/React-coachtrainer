
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sectiontwitter from "./component/Sectiontwitter";
import Healthlife from "./component/Healthlife";
import BookNow from "./component/BookNow";
import Dietprograms from "./component/Dietprograms";
import AwesomeArticles from "./component/AwesomeArticles";
import Cosultation from "./component/Cosultation";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";



 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route/>
          <Route path="AwesomeArticles" element={<AwesomeArticles/>} />
          <Route path="Sectiontwitter" element={<Sectiontwitter/>} />
          <Route path="Healthlife" element={<Healthlife/>} />
          <Route path="BookNow" element={<BookNow/>} />
          <Route path="Dietprograms" element={<Dietprograms/>} />
          <Route path="Consultation" element={<Cosultation/>} />
          <Route path="Footer" element={<Footer/>} />
          <Route path="Navbar" element={<Navbar/>} />
          <Route path="Banner" element={<Banner/>} />
          
         
 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default  App