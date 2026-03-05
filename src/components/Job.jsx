import React from 'react'
import { useState } from 'react'

 function Job({ job, applyForJob }) {
    const [repoUrl, setRepoUrl] = useState("")
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async () => {
        if (!repoUrl || success) return
        setSending(true)
        setError(null)
        setSuccess(false)

        try {
          await applyForJob(job.id, repoUrl)
            setSuccess(true)
        } catch (e) {
            setError(e.message)
        }   
            setSending(false)
    }
  return (
    <div className='job-item'>
      <h3>{job.title}</h3>
      <input type="text"
        placeholder="URL de tu repositorio de GitHub :)"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}/>
        <button onClick={handleSubmit} disabled={sending || success}> { success ? "Solicitud enviada" : sending ? "Enviando..." : "Submit"}</button>
        {success && <p style={{ color: "green"}} className='success'>¡Solicitud enviada con éxito!</p>}
        {error && <p style={{ color: "red" }} className='error'>Error: {error}</p>}
    </div>
  )
}

export default Job