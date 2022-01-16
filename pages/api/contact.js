const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// TODO :
// - https://vercel.com/docs/concepts/projects/environment-variables
// - reCAPTCHA

export default async (req, res) => {
	const body = JSON.parse(req.body);

	const message = `
		Nom : ${body.name}\r\n
		Email : ${body.email}\r\n
		Objet : ${body.subject}\r\n
		Message : ${body.message}\r\n
		`;

	const data = {
		from: '"CV contact" <trembleau.thibault@gmail.com>',
		to: "trembleau.thibault@gmail.com",
		subject: body.subject,
		text: message,
		html: message.replace(/\r\n/g, "<br />"),
	};
	
	sgMail.send(data);
	res.status(200).json({ status: 'Ok' });
}
/*const msg = {
	from: '"Fred Foo 👻" <foo@example.com>',
	to: "trembleau.thibault@gmail.com",
	subject: "Hello ✔",
	text: "Hello world?",
	html: "<b>Hello world?</b>",
}

sgMail
	.send(msg)
	.then((response) => {
		console.log(response[0].statusCode)
		console.log(response[0].headers)
	})
	.catch((error) => {
		console.error(error)
	});*/