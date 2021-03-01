// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (_, res) => {
  res.status(200).json({ key: process.env.EMAILJS_KEY, service: process.env.EMAILJS_SERVICE, template: process.env.EMAILJS_TEMPLATE})
}



