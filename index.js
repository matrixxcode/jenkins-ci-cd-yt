const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000




app.get('/', (req, res) => {
    
    let content = 'Jenkins CI CD pipeline version 1'

    res.send(content)

})





app.listen(PORT, () => console.log(`server running on port ${PORT}`))