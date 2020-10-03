const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

//ES6

module.exports.sendMail = (toMail) => {
	const msg = {
		to: toMail,
		from: 'pd66255@gmail.com', // Use the email address or domain you verified above
		subject: 'Welcome to iCrowdTask',
		text: 'This mail is to confirm that you have registered Successfully.'
	};
	sgMail.send(msg).then(
		() => {
			console.log('done');
		},
		(error) => {
			//console.error(error);
			if (error.response) {
				//console.error(error.response.body);
			}
		}
	);
};
