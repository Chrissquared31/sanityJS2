import fetch from 'isomorphic-unfetch';

export async function subscribeEmail(email: string): Promise<void> {
  const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const audienceId = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  console.log('API Key:', apiKey);
  console.log('Audience ID:', audienceId);

  if (!apiKey || !audienceId) {
    throw new Error('Mailchimp API key or audience ID is missing');
  }

  const dataCenter = apiKey.split('-')[1];
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  


  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.title);
  }
}
