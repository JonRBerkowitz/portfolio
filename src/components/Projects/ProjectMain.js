import React from 'react';
import desktop from '../../assets/desktop.jpg';

const ProjectMain = () =>
<div className="project-main">
	<div className="project-main-image" style={{ backgroundImage: `url("https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940")` }}>
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
	</div>
</div>

export default ProjectMain;