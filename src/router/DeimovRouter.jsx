import { Routes, Route } from "react-router-dom";
import DeimovRoutes from '../routes/DeimovRoutes'

const DeimovRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={<DeimovRoutes/>} />
    </Routes>
  </>
  )
}

export default DeimovRouter