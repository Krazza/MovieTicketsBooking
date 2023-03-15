export interface MovieEntry{
    id: string,
    title: string,
    price: number,
    length: string,
    location: string,
    isSoldOut: boolean,
    seats: boolean[][],
    tempSeats: boolean[][],
    userBookedTickets: object[]
    
}