import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Nichita Grigoriev',
    email: 'nichita.grgr@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  }
]

export default users
