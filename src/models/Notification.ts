 export interface Notification {
    id: number
    type: "payment" | "increase" | "contract_expiry"
    title: string
    message: string
    date: string
    urgent?: boolean
    contractId: string
    propertyId: string
  }
  