import { Router } from 'express';
import { getTestsByDisciplines, getAllTestsGroupByTeachers } from '../controllers/disciplinesControllers.js';

const disciplinesRouter = Router();

disciplinesRouter.get('/disciplines-by-terms', getTestsByDisciplines);
disciplinesRouter.get('/disciplines-by-teachers', getAllTestsGroupByTeachers);

export default disciplinesRouter;
