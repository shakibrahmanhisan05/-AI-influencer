import './App.css';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import KanbanViewPage from '@/features/kanban/components/kanban-view-page';
import OverviewPage from '@/features/overview/components/OverviewPage';
import ProductListingPage from '@/features/products/components/product-listing';
import ProductViewPage from '@/features/products/components/product-view-page';
import ProfileViewPage from '@/features/profile/components/profile-view-page';
import BillingPage from '@/pages/dashboard/BillingPage';
import ExclusivePage from '@/pages/dashboard/ExclusivePage';
import WorkspacesPage from '@/pages/dashboard/WorkspacesPage';
import BusinessInfoPage from '@/pages/BusinessInfoPage';
import ConnectFacebookPage from '@/pages/ConnectFacebookPage';
import LandingPage from '@/pages/LandingPage';
import SignupPage from '@/pages/SignupPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function PublicProviders({
  children
}) {
  return <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>;
}

function App() {
  return <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicProviders><LandingPage /></PublicProviders>} />
          <Route path='/signup' element={<PublicProviders><SignupPage /></PublicProviders>} />
          <Route path='/business-info' element={<PublicProviders><BusinessInfoPage /></PublicProviders>} />
          <Route path='/connect-facebook' element={<PublicProviders><ConnectFacebookPage /></PublicProviders>} />

          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<Navigate to='overview' replace />} />
            <Route path='overview' element={<OverviewPage />} />
            <Route path='workspaces' element={<WorkspacesPage />} />
            <Route path='product' element={<ProductListingPage />} />
            <Route path='product/new' element={<ProductViewPage productId='new' />} />
            <Route path='product/:productId' element={<ProductViewPage />} />
            <Route path='product/:productId/edit' element={<ProductViewPage />} />
            <Route path='kanban' element={<KanbanViewPage />} />
            <Route path='profile' element={<ProfileViewPage />} />
            <Route path='billing' element={<BillingPage />} />
            <Route path='exclusive' element={<ExclusivePage />} />
          </Route>

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>;
}

export default App;
