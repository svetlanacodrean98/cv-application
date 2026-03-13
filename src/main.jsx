import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GeneralInformation from './components/GeneralInformation'
import PracticalExperiences from './components/PracticalExperiences'
import EducationalExperiences from './components/EducationalExperiences'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation />
    <PracticalExperiences />
    <EducationalExperiences />
    <button onClick={() => window.print()}>Print CV</button>
  </StrictMode>,
)
