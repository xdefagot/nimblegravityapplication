import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Job from './components/Job.jsx'
import JobList from './components/JobList.jsx'

const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net"

function App() {

  // STATES
  const [jobs, setJobs] = useState([])
  const [candidate, setCandidate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // FETCH CANDIDATE (STEP 2)
  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/api/candidate/get-by-email?email=ximedefagot@gmail.com`
        )

        if (!res.ok) throw new Error("Error al obtener candidato")

        const data = await res.json()
        setCandidate(data)
      } catch (e) {
        console.error("Error candidate:", e.message)
      }
    }

    fetchCandidate()
  }, [])

  // FETCH JOBS (STEP 3)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)

        const res = await fetch(`${BASE_URL}/api/jobs/get-list`)
        if (!res.ok) throw new Error("Error al cargar trabajos")

        const data = await res.json()
        setJobs(data)
        setLoading(false)
      } catch (e) {
        setError(e.message)
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  // DEBUG
  useEffect(() => {
    console.log("CANDIDATE:", candidate)
  }, [candidate])

  // APPLY (STEP 5)
  const applyForJob = async (jobId, repoUrl) => {
    if (!candidate) return

    try {
      const body = {
        uuid: String(candidate.uuid),
        jobId: String(jobId),
        candidateId: String(candidate.candidateId),
        applicationId: String(candidate.applicationId),
        repoUrl: repoUrl
      }

      const res = await fetch(
        `${BASE_URL}/api/candidate/apply-to-job`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      )

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Error al aplicar: ${errorText}`)
      }

      const data = await res.json()
      console.log("Aplicación exitosa:", data)

    } catch (e) {
      console.error("Error al aplicar:", e.message)
    }
  }

  return (
    <>
      <h1>Application Job: Nimble Gravity</h1>

      <main className='container'>
        {loading && <p>Cargando postulaciones...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && jobs.map(job => (
          <Job
            key={job.id}
            job={job}
            applyForJob={applyForJob}
          />
        ))}
      </main>
    </>
  )
}

export default App