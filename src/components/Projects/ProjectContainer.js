import React from 'react';
import ProjectMain from './ProjectMain';
import ProjectSidebar from './ProjectSidebar';

class ProjectContainer extends React.Component {
	render() {
	return(
		<div className="panel">
			<ProjectMain bg={this.props.bg}/>
			<ProjectSidebar />
		</div>
	)
	}
}

export default ProjectContainer;