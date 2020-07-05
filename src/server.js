require('dotenv').config()
import kernel from './app/Http/Kernel'

const port = process.env.APP_PORT || 3333;
const message = () => console.log(`Server running on ${port}`);

kernel.listen(port, message)