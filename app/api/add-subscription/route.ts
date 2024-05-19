import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

/**
 * POST endpoint to add a new subscriber to the Mailchimp audience.
 *
 * @param {Request} request - The HTTP request containing the JSON payload with the email address.
 * @returns {Promise<Response>} - A Promise that resolves to a JSON response containing the result of the Mailchimp API call.
 * @throws {Error} - If the email address is missing in the request payload.
 */
export async function POST(request: Request): Promise<Response> {
  const { email } = await request.json();

  if (!email) throw new Response(JSON.stringify({ error: "Email is required" }));

  try {
    const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, { email_address: email, status: "subscribed" });

    return new Response(JSON.stringify({ res }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: JSON.parse(error.response.text) }));
  }
}
