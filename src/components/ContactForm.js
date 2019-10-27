import React, { useState } from 'react'

export default function ContactForm(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');

	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	}

	const handleSubmit = e => {
		if (status) {
			return props.closeModal()
		}
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message })
		})
			.then(() => setStatus("Thanks! I will get back to you as soon as I can"))
			.catch(error => setStatus("Form Submission Failed!"));

		e.preventDefault();
	};

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'name') {
			return setName(value)
		}
		if (name === 'email') {
			return setEmail(value)
		}
		if (name === 'message') {
			return setMessage(value)
		}
	}

	return (
		<>
			{status &&
				<>
					<div className="alert alert-primary">
						{status}
					</div>
					<button className="btn btn-block btn-secondary" type="button" onClick={props.closeModal}>Close</button>
				</>
			}
			{!status &&
				<form data-netlify-recaptcha="true" onSubmit={handleSubmit} className="text-white">
					<div className="form-group">
						<label>Your Name:</label>
						<input
							name="name"
							type="text"
							value={name}
							className="form-control bg-dark border-secondary"
							placeholder="Clark Kent"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label>Your Email:</label>
						<input
							name="email"
							type="email"
							value={email}
							className="form-control bg-dark border-secondary"
							placeholder="clark@example.com"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label>Message:</label>
						<textarea
							name="message"
							value={message}
							className="form-control bg-dark border-secondary"
							placeholder="Write a message..."
							onChange={handleChange}
							required
						/>
					</div>
					<button className="btn btn-block btn-secondary" type="submit">Send</button>
				</form>}
		</>
	)
}