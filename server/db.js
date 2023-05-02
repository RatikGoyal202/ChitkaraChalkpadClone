// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//   username: Number,
//   password: String,
//   dept: String,
// });

// const user = mongoose.model('Data', userSchema);

// const CONNECTION_URL = 'mongodb+srv://umesh:umesh123@cluster0.mx2trqz.mongodb.net/test';

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connection to MongoDB is established'))
//   .catch((error) => console.log(error));

// const checkLogin = async (req, res) => {
//   const { my_rollno, my_password, my_dept } = req.body;
//   try {
//     const user1 = await user.findOne({
//       username: my_rollno,
//       password: my_password,
//       dept: my_dept,
//     });
//     if (user1) {
//       res.status(200).send('Login successful');
//     } else {
//       res.status(401).send('Login failed');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Something went wrong');
//   }
// };

// module.exports = {
//   checkLogin,
// };
