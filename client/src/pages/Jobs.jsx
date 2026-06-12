import JobCard from "../components/JobCard";

function Jobs() {

  const jobs = [
    {
      _id: 1,
      title: "React Developer",
      description: "Need a MERN stack developer",
      category: "Web Development",
      budget: 10000
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
        />
      ))}

    </div>
  );
}

export default Jobs;