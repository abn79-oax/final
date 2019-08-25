import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default class Button extends React.Component {
	


	render() {
		const { onClick, type, className, label } = this.props;
		// console.log('TCL: Button -> render -> className', className);
		return (
			<div className={styles.main}>
				<button onClick={onClick} className={styles.button + ' ' + className}>
					{label}
				</button>
			</div>
		);
	}
}
