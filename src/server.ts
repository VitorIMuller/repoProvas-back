import app from "./app.js"

app.listen(process.env.PORT || 5000, () => {
    console.log(`Running in 5000`)
})