import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavoriteMeals from './pages/Favorites.tsx'
import DashboardLayout from './Layout/DashboardLayout.tsx'
import Home from './pages/Home.tsx'
import RecipeDetail from './pages/RecipeDetail.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />}/>
            <Route path="/favorites" element={<FavoriteMeals />} />
          </Route>
          
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
