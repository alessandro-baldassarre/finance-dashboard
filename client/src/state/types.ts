export interface ExpenseByCategory {
    salaries: number,
    supplies: number,
    service: number,
}

export interface Month {
    id: string,
    month: string,
    revenue: number,
    expenses: number,
    nonOperationalExpenses: number,
    operationalExpenses: number
}

export interface Day {
    id: string,
    date: string,
    revenue: number,
    expenses: number,
}
export interface GetKpisResponse {
    id: string,
    _id: string,
    __v: number,
    totalProfit: number,
    totalRevenue: number,
    totalExpenses: number,
    expensesByCategory: ExpenseByCategory,
    monthlyData: Month[],
    dailyData: Day[],
    createdAt: string,
    updatedAt: string,
}


export interface GetProductsResponse {
    id: string,
    _id: string,
    __v: number,
    price: number,
    expense: number,
    transactions: string[],
    createdAt: string,
    updatedAt: string,
}

