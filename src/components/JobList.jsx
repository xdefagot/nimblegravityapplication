import Job from './Job'

function JobList({ jobs, repoUrl, setRepoUrl, applyForJob }) {
    return (
        <>
        {jobs.map((job => (
         <Job 
         key={job.id} 
         job={job} 
         applyForJob={applyForJob} 
         repoUrl={repoUrl} 
         setRepoUrl={setRepoUrl}
         />   
        )))}
        
        </>
    )
}

export default JobList