const { sequelize, User, Post } = require("./models")
const express = require("express")
const app = express()

app.use(express.json())

app.post("/users", async (req, res) => {
  const { name, email, role } = req.body

  try {
    const user = await User.create({ name, email, role })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
})

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll()
    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.put("/users/:uuid", async (req, res) => {
  const { uuid } = req.params
  const { name, email, role } = req.body

  try {
    const user = await User.findOne({ where: { uuid } })

    if (!user) {
      return res.status(400).json({ error: "User not found !" })
    }

    const userUpdate = await user.update({
      name,
      email,
      role,
    })

    // user.name = name
    // user.email = email
    // user.role = role

    await user.save()
    return res.json(userUpdate)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid
  try {
    const user = await User.findOne({
      where: { uuid },
      include: "posts",
    })
    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.post("/posts", async (req, res) => {
  const { userUuid, body } = req.body
  try {
    const user = await User.findOne({ where: { uuid: userUuid } })
    const post = await Post.create({ body, userId: user.id, email: user.email })
    return res.json(post)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll({ include: "user" })
    return res.json(posts)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.get("/user", async (req, res) => {
  try {
    const users = await User.findAll({
      include: "posts",
    })
    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid
  try {
    const user = await User.findOne({
      where: { uuid },
    })

    await user.destroy()
    return res.json({ message: "User deleted" })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Something went wrong" })
  }
})

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000")
  await sequelize.authenticate()
  console.log("Database connected")
})
