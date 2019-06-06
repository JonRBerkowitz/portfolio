import React from 'react';

class ProjectSidebar extends React.Component {
	render(){
	return(
		<div className="project-sidebar">
			<h1>Edit a Project</h1>
			<div className="placeholder-widget"></div>
			<p>Try changing the name of the project, add or remove tasks,
			check them off, or assign them to other users. You can also
			visit www.awesome.com for the full experience.</p>
			<a href="#" className="call-to-action">Visit Awesome.com</a>
		</div>
	)
	}
}

export default ProjectSidebar;