interface login {
    email: string,
    password: string
}

interface addJobs {
    company_name: string,
    position: string,
    status: string,
    source: string,
    apply_date: Date,
    notes: string,
}

export type { addJobs, login };

