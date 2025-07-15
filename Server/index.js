const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const multer = require('multer');
// const User = require('./modulas/User');

const app = express();
const port = 4040;
const jwt = require('jsonwebtoken');
const { default: orderRouter } = require('./routes/orderRoute');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/USER', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// store img
// const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
  // destination: './upload/images',
  // filename: (req, file, cb) => {
  //   return cb(null, `${file.fieldname}_${Date.now()}${Path.extname(file.originalname)}`)
  // }
})
const upload = multer({ storage: storage })

app.use("/images", express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    img_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})

// schema for creating product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldprice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
})

app.post('/addproduct', async (req, res) => {

  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }
  else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    img2: req.body.img2,
    price: req.body.price,
    oldprice: req.body.oldprice,
    category: req.body.category,

  })
  console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  })
})


// product delete
app.post("/remove", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name
  })
})

app.get("/allproduct", async (req, res) => {
  let products = await Product.find({});
  console.log("all product fached");
  res.send(products);
})


// user model sign up
const WebUsers = mongoose.model('WebUsers', {
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.new,
  },
})

// client signup
app.post('/signup', async (req, res) => {
  let check = await WebUsers.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, error: "alrady" })
  }
  let cart = {}
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new WebUsers({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  })
  await user.save()

  const data = {
    user: {
      id: user.id
    }
  }

  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token })

})

// client login
app.post('/weblogin', async (req, res) => {
  let user = await WebUsers.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, 'secret_ecom')
      res.json({ success: true, token });
    }
    else {
      res.json({ success: false, errors: "wrong password" });
    }
  }
  else {
    res.json({ success: false, errors: "wrong email" });
  }

})

// fatch-user
const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const data = jwt.verify(token, 'secret_ecom'); 
    req.user = data.user;
    next();
  } catch {
    res.status(401).json({ error: "Invalid Token" });
  }
};

// add id number in mongodb
app.post('/addtocart', fetchUser, async (req, res) => {
  console.log("add", req.body.itemId);

  let userData = await WebUsers.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await WebUsers.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Added")
  // console.log(req.body, req.user);
})

// remove id number in mongodb
app.post('/removefromcart', fetchUser, async (req, res) => {
  console.log("remove", req.body.itemId);

  let userData = await WebUsers.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await WebUsers.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("remove")

})

// again login  fetch addtocart data
app.post('/getcart', fetchUser, async (req, res) => {

  let userData = await WebUsers.findOne({ _id: req.user.id });
  res.json(userData.cartData);
})

app.use('/api/order', orderRouter);
app.use('/api/auth', authRoutes);


app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});