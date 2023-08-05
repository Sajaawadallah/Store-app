import { Navigate, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import StoresPage from './pages/StoresPage';
import StoreDetlies from './pages/StoreDetlies';
import EditStore from './pages/EditStore';
import CreateStore from './pages/CreateStore';
import NotFound from './component/NotFound';
import Container from './component/Container'





function App() {
  return (

    <Container>
      <Routes>
        <Route element={<Outlet />} >
          <Route index path='/' element={<StoresPage />} />
          <Route path=":id" element={<StoreDetlies />} />
          <Route path="/CreateStore" element={<CreateStore />} />
          <Route path=":id/EditStore" element={<EditStore />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to={"NotFound"} replace />} />
      </Routes>

    </Container>

  );
}

export default App; 
