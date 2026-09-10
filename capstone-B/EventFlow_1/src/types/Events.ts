// Main Code 

interface RegisteredEvents 
{
    id : string ,
    isAttend : boolean
}

interface SingleEvent
{
    id : string ;
}

interface UserRegisteredEvents 
{
    gmail : string ,
    events : RegisteredEvents
}

interface EventInterface 
{
    title:string ;
    description:string ;
    category:string ;
    club_name:string ;
    date : string ;
    location:string ;
    venue:string ;
    total_seat : number ;
}

enum DiscountType
{
    percentage ,
    amount
}

interface TicketInterface 
{
    ticket_name : string ;
    ticket_type : string ;
    price : number ;
    ticket_description : string ;
    codeForDiscount? : string ;
    discount? : number ;
    discountType? : string ;
}



// export code 

export {UserRegisteredEvents,EventInterface,SingleEvent,TicketInterface,DiscountType}

