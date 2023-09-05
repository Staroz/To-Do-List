import express, {json} from 'express';
import { toDoRouter } from './Router/toDo.router.js';
const app = express();

const PORT = process.env.PORT ?? 3000;

app.disable('x-powered-by');
app.use(json());
app.use('/api', toDoRouter);

app.get('/', (req,res)=> {
	res.status(200).send('<h1>WELCOME HOMEPAGE</h1>');
});

app.listen(PORT, ()=> {
	console.log(`App is open on port ${PORT}`);
});