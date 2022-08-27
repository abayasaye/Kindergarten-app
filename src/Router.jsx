import { Routes, Route } from "react-router-dom";
import { Home ,Level,ParentsCommittee,Teachers,Contact,PageNotFound } from "./components/pages";

const Router = ()=>{
    return(
      <Routes>
        <Route >
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Teachers" element={<Teachers/>}/>
      <Route path="Level" element={<Level/>}/>
      <Route path="ParentsCommittee" element={<ParentsCommittee/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
        </Route>
      </Routes>
    )
}
export default Router