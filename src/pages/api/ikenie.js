import { listMajors } from '../../api/sheet'

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  try {
    const majors = await listMajors()
    res.statusCode = 200
    res.end(JSON.stringify(majors))
  } catch (err) {
    res.statusCode = 500
    res.end(JSON.stringify(err))
  }
}
