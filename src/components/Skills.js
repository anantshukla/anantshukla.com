import React from 'react';

const Skills = () => {
  return (
    <div className="section">
      <h2>Skills</h2>
      <div className="content">
        <div className="skills">
          <div className="skill-category">
            <h3>Languages</h3>
            <p>
              Python, Java, JavaScript, TypeScript, Go, C\#, Erlang, Bash/Shell, SQL, PHP, Groovy, Erlang, HTML/CSS
            </p>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <p>
              Node.js, Express, React, Angular, .NET Core/Framework, Spring Boot, Flask, React Native
            </p>
          </div>
          <div className="skill-category">
            <h3>Tools & Cloud Platforms</h3>
            <p>
              Azure, AWS, GCP, Kubernetes, Docker, Databricks, Jenkins, Terraform, TFS/Azure DevOps, Git, JIRA, Figma
            </p>
          </div>
          <div className="skill-category">
            <h3>Database & Other Tools</h3>
            <p>
              SQL Server, Postgres, MySQL, Cassandra, MongoDB, Neo4j, Apache Spark, Dask, Hadoop, REST, gRPC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
