import { useState } from 'react'
import './App.css'
import Header from './componets/header';
import Tabs from './componets/tabs';
import reactImg from '../src/assets/react.svg'

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0)
  return (
    <>
    <div>
      <Header 
          imgUrl={reactImg}  
          imgAlt="React logo" 
          title="React.js" 
          subTitle="i.e., using the React library for rendering the UI" />
        <Tabs 
          activeContentIndex={activeContentIndex}
          setActiveContentIndex={setActiveContentIndex}
          content={content}
        />
    </div>
    </>
  )
}

export default App
