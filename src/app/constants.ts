export const MockApiUrl = "https://posthook-api.mock.beeceptor.com";

export interface ITask {
    id: Number
    title: String,
    description: String,
    status: String,
    priority: String,
    startDate: Date,
    endDate: Date
}

export const hardcodedTasks: ITask[] = [
    {
        id: 1,
        title: 'New feature',
        description: 'Add tasks grid',
        status: 'in process',
        priority: 'high',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
    {
        id: 2,
        title: 'Testing',
        description: 'create task testing',
        status: 'to do',
        priority: 'low',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
    {
        id: 3,
        title: 'Bugfix',
        description: 'data fetching type fix',
        status: 'to do',
        priority: 'high',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
    {
        id: 4,
        title: 'New feature',
        description: 'create modal',
        status: 'in process',
        priority: 'high',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
    {
        id: 5,
        title: 'Testing',
        description: 'dragndrop testing',
        status: 'to do',
        priority: 'low',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
    {
        id: 6,
        title: 'Bugfix',
        description: 'grid pagination fix',
        status: 'done',
        priority: 'high',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
    {
        id: 7,
        title: 'Testing',
        description: 'task update testing',
        status: 'to do',
        priority: 'low',
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 10)
    },
]