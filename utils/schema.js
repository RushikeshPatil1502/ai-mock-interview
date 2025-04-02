import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('MockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull()
});

export const Question = pgTable('Question', {
    id: serial('id').primaryKey(),
    MockQuestionJsonResp: text('MockQuestionJsonResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    typeQuestion: varchar('typeQuestion').notNull(),
    company: varchar('company').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull()
});



export const UserAnswer = pgTable('UserAnswer',{
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),
    userEmail: varchar('userEmail'),
    createdAt: varchar('createdAt')
})

export const Newsletter = pgTable('Newsletter',{
    id: serial('id').primaryKey(),
    newName: varchar('newName'),
    newEmail: varchar('newEmail'),
    newMessage: text('newMessage'),
    createdAt: varchar('createdAt')
})