import prisma from '../database.js';

export async function getAllTestsOrderByTerms() {
  const terms = await prisma.terms.findMany({
    select: {
      id: true,
      number: true,
      disciplines: {
        select: {
          id: true,
          name: true,
          teachersDisciplines: {
            include: {
              teachers: true,
              tests: {
                include: {
                  categories: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return terms;
}

export async function getAllTestsGroupByTeachers() {
  const teachers = await prisma.teachers.findMany({
    select: {
      id: true,
      name: true,
      teachersDisciplines: {
        include: {
          disciplines: true,
          tests: {
            include: {
              categories: true,
            },
          },
        },
      },
    },
  });

  return teachers;
}
