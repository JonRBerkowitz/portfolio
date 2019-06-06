import React from 'react';
import ProjectContainer from './ProjectContainer';

class ProjectsContainer extends React.Component{

	render() {
	return(
		<React.Fragment>
			<ProjectContainer bg="https://images.pexels.com/photos/533463/pexels-photo-533463.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"/>
			<ProjectContainer bg="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		</React.Fragment>
	)
	}
}

export default ProjectsContainer;