import React from "react";

function ProjectItem({ name, about, technologies }) {
	const techRender = technologies.map((technologie) => {
		return <span key={technologie}>{technologie}</span>;
	});

	return (
		<div className="project-item">
			<h3>{name}</h3>
			<p>{about}</p>
			<div className="technologies">{techRender}</div>
		</div>
	);
}

export default ProjectItem;
