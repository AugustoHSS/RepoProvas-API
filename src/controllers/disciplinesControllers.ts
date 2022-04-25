import { Request, Response } from 'express';
import * as disciplinesService from '../services/disciplinesService.js';

export async function getTestsByDisciplines(req: Request, res: Response) {
  const tests = await disciplinesService.getAllTestsOrderByTerms();

  res.send(tests);
}

export async function getAllTestsGroupByTeachers(req: Request, res: Response) {
  const tests = await disciplinesService.getAllTestsGroupByTeachers();

  res.send(tests);
}
