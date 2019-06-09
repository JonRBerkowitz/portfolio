import React from 'react';

const ProjectMain = (props) =>
<div id="first-project" className="project-main">
	<div className="project-main-image" style={{ backgroundImage: `url(${props.bg})` }}>
	</div>

	<div className="project-main-text">
	<div className="project-title">
			<h1>Task Master</h1>
		</div>
		<p>This app was created to allow basic project management to take place among team members. After signing in, users
		can create new projects, create and assign tasks to themselves or others, as well as comment on, edit and delete
		tasks. This app was created to allow basic project management to take place among team members. After signing in, users
		can create new projects.
		</p>
		<h2>Technologies Used:</h2>
		<p className="tech-used">Javascript, HTML, CSS, Ruby on Rails</p>
	</div>
</div>


export default ProjectMain;