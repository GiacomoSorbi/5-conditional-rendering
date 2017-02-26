import React, { Component } from 'react';

function If(props) {
	return (props.condition) && props.children;
}

export default If;