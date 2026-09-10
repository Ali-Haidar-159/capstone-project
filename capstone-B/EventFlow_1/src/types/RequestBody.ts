// Global Variables 


// Interfaces 

// Registration Table

interface RegistrationInterface { 
    gmail:string;
    password:  string;
}

//  User Profile Table

interface UserProfileInterface {
    gmail?:string  ;      
    name:string  ;  
    number?:string ;           
    gender:string  ;     
    institute:string  ;  
    address :string  ;                 
    interest :string ; //changed from interest         
    course :string ;//changed from sector
    major :string ; //changed from topic           
    hobby:string; ////changed from educational_qualification
    department  :string        ;   
}

// Single user id interface 
interface UserIdInterface{
    gmail : string
}


//  Club Details Table

interface ClubDetailsInterface {      
    name  :string       
    category :string    
    description:string  
    club_email:string   
    admin  :string 

}

//  Events Table

interface EventsInterface {
    title   :string  
    description :string 
    category :string   
    club_name :string  
    date   :string 
    time : string    
    location :string   
    venue   :string    
    total_seat :string 
}


// exports code 

export {RegistrationInterface,UserIdInterface,UserProfileInterface}