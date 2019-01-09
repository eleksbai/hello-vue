import axios from 'axios'

export default async () => {
  const res = await axios.get('http://127.0.0.1:5000/dev/')
  return res.data
}
