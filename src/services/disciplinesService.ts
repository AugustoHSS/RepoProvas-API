import * as disciplinesRepository from '../repositories/disciplinesRepository.js';

export async function getAllTestsOrderByTerms() {
  const tests = await disciplinesRepository.getAllTestsOrderByTerms();

  return tests;
}

export async function getAllTestsGroupByTeachers() {
  const tests = await disciplinesRepository.getAllTestsGroupByTeachers();

  return tests;
}
