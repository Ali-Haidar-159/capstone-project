import passport from "passport";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

passport.serializeUser((user: any, done) => {
    const serializedData = {
        role: user.role,              // "user" or "admin"
        id: user.gmail || user.club_id
    };
    done(null, serializedData);
});

passport.deserializeUser(async (user: any, done) => {
    try 
    {
        let foundUser = null;

        if (user.role === "user") {
            foundUser = await prisma.registration.findUnique({
                where: {
                    gmail: user.id 
                }
            });
        }

        if (user.role === "admin") {
            foundUser = await prisma.admin.findUnique({
                where: {
                    club_id: user.id 
                }
            });
        }

        return done(null, foundUser);
        
    } 
    catch (err) 
    {
        return done(err);
    }
});


// export code 

export {passport}
