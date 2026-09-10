-- CreateTable
CREATE TABLE "Registration" (
    "gmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("gmail")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "gmail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT,
    "gender" TEXT,
    "institute" TEXT,
    "address" TEXT,
    "department" TEXT,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("gmail")
);

-- CreateTable
CREATE TABLE "UserInterest" (
    "gmail" TEXT NOT NULL,
    "profession" TEXT,
    "sector" TEXT,
    "topic" TEXT,
    "educational_qualificaton" TEXT,
    "department" TEXT,

    CONSTRAINT "UserInterest_pkey" PRIMARY KEY ("gmail")
);

-- CreateTable
CREATE TABLE "RegisteredEvents" (
    "gmail" TEXT NOT NULL,
    "events" JSONB NOT NULL,

    CONSTRAINT "RegisteredEvents_pkey" PRIMARY KEY ("gmail")
);

-- CreateTable
CREATE TABLE "ClubDetails" (
    "club_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "club_email" TEXT NOT NULL,
    "admin" TEXT NOT NULL,

    CONSTRAINT "ClubDetails_pkey" PRIMARY KEY ("club_id")
);

-- CreateTable
CREATE TABLE "Events" (
    "event_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "club_name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "total_seat" INTEGER NOT NULL,
    "isApporve" BOOLEAN NOT NULL DEFAULT false,
    "img_url" TEXT,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("event_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClubDetails_club_email_key" ON "ClubDetails"("club_email");
