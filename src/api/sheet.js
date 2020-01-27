import { google } from 'googleapis'

const sheetAPI = google.sheets({
  version: 'v4',
  auth: process.env.GOOGLE_API_KEY
})

export function listMajors() {
  return new Promise((resolve, reject) => {
    sheetAPI.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    }, (err, res) => {
      if (err) {
        reject(err)
      }

      resolve(res.data.values)
    });
  })
}
