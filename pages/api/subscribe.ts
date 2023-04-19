import type { NextApiRequest, NextApiResponse } from 'next';
import { subscribeEmail } from '../../lib/mailchimp';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    try {
      await subscribeEmail(email);
      res.status(200).json({ message: 'Successfully subscribed!' });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;

