import sgMail from "@sendgrid/mail";

export default defineEventHandler(async (event) => {
	try {
		const config = useRuntimeConfig();
		sgMail.setApiKey(config.public.SENDGRID_KEY);
		const {name, phone, email, service, date, guest_count} = getQuery(event);

		const msg = {
			personalizations: [
				{
					to: "gbkrishnan@gmail.com",
					dynamic_template_data: {
						name: name,
						phone: phone,
						email: email,
						service: service,
						date: date,
						guest_count: guest_count
					},
				},
			],
			from: "Tinkr <tinkr.simpson@gmail.com>",
			name: "Tinkr",
			templateId: "d-c1a7d432cbc04d229ae5aa09315e606b",
		};
		// @ts-ignore
		return await sgMail.send(msg);
	} catch (error) {
		console.log(JSON.stringify(error));
		return error;
	}
});
