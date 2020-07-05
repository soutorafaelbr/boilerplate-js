require('dotenv').config()
import kernel from './app/http/Kernel'

const port = process.env.APP_PORT || 3333;
const message = () => console.log(`Server running on ${port}`);

kernel.listen(port, message)