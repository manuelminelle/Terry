import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DayPage } from './pages/DayPage';
import { ProgressPage } from './pages/ProgressPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/giorno-a" element={<DayPage dayId="giornoA" />} />
        <Route path="/giorno-b" element={<DayPage dayId="giornoB" />} />
        <Route path="/giorno-c" element={<DayPage dayId="giornoC" />} />
        <Route path="/progressi" element={<ProgressPage />} />
      </Routes>
    </Layout>
  );
}
