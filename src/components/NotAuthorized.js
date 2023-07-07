import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import JumbotronWrapper from './JumbotronWrapper';

const NotAuthorized = (props) => (
	<JumbotronWrapper {...props.jumbotronProps}>
		{props.children}
	</JumbotronWrapper>
);

NotAuthorized.propTypes = {
	jumbotronProps: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string
	})
};

NotAuthorized.defaultProps = {
	jumbotronProps: {
		title: '444 not authorized'
	},
	children: (
		<Link className="nav-link" to="/">
			Back
		</Link>
	)
};

export default NotAuthorized;
