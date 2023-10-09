import React from 'react';
import style from './Test.module.scss';

export const TestComponent = () => {
	return (
		<div className={style.test}>
			<h1>Hello this is test</h1>
			<p>My name is</p>
		</div>
	);
};