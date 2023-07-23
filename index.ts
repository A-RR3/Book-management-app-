import express from 'express'
import bookRouter from './routes/book.js'
const app = express();
const PORT =3000;

app.use(express.json());
app.use('/library',bookRouter);

app.use('/',(req,res)=>{
    return res.status(404).json({message: "Your requested an api that I dont have :( "})
});

app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
  });