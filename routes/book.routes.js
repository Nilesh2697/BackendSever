const express = require("express")
const { BookModel } = require("../models/book.model")
const bookRouter = express.Router();
const { validator } = require("../middlewares/validator.js")
// const { record } = require("../middlewares/record.middleware.js");

bookRouter.get("/", async (req, res) => {
    const params = req.query
    try {
        const book = await BookModel.find(params)
        res.send(book)
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "error in loading..." })
    }
})
bookRouter.use(validator)
// bookRouter.use(record);
bookRouter.post("/post", async (req, res) => {
    const payload = req.body
    try {
        const bookNote = new BookModel(payload)
        await bookNote.save()
        res.send("Book has been posted !")
    }
    catch (error) {
        console.log(error)
        res.send("error")
    }
})

bookRouter.patch("/update/:bookID", async (req, res) => {
    const bookID = req.params.bookID
    const payload = req.body;
    try {
        const q = await BookModel.findByIdAndUpdate({ _id: bookID }, payload)
        console.log(q)
        res.send("Notes has been updated !")
    }
    catch (error) {
        console.log(error)
        res.send("error")
    }
})

bookRouter.delete("/delete/:bookID", async (req, res) => {
    const bookID = req.params.bookID
    try {
        await BookModel.findByIdAndDelete({ _id: bookID })
        res.send(`Book with ID ${bookID} has been deleted`)
    }
    catch (error) {
        console.log(error)
        res.send("error")
    }
})


module.exports = { bookRouter }