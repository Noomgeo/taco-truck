import React from 'react';
import './Contact.css';
import OverTextarea from './OverTextarea';

class Contact extends React.Component {
	state = {
		name: '',
		message: '',
		email: '',
		isMessageTooLong: false,
	}

	setName = (event)=> {
		this.setState({
			name: event.target.value
		})
	}

	setEmail = (event)=> {
		this.setState({
			email: event.target.value
		})
	}

	setMessage = (value, isTooLong)=> {
		this.setState({
			message: value,
			isMessageTooLong: isTooLong,
		})
	}

	submit = ()=>
		console.log(this.state.name, this.state.email, this.state.message)

	render(){
		const { name, email, message } = this.state;

		return (
			<div className='Contact Page'>
				<div className='form-container'>
					<h3>Contact us</h3>
					<input value={name}
						   placeholder='Full Name'
						   onChange={this.setName} />

					<input value={email}
						   placeholder='Email Address'
						   onChange={this.setEmail} />

					<OverTextarea value={message}
								  maxLength={500}
								  errorColor='pink'
								  validColor='darkgreen'
								  className='OverTextarea'
								  onChange={this.setMessage} />

					<button onClick={this.submit}
							disabled={this.state.isMessageTooLong}>
					Submit
					</button>
				</div>
			</div>
		);
	}
}

export default Contact;