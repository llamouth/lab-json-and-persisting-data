import { useEffect, useState } from 'react'
import './App.scss'

function App() {

  const [jobListings, setJobListings] = useState([])

  useEffect(() => {
    fetch("../data/jobListings.json")
    .then(res => res.json())
    .then(data => setJobListings(data))
  },[])

  useEffect(() => {
    console.log(jobListings)
  },[jobListings])

  return (
    <>
      
    </>
  )
}

export default App
