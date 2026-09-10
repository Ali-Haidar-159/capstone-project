-- CreateTable
CREATE TABLE "Ticket" (
    "event_id" TEXT NOT NULL,
    "ticket_name" TEXT NOT NULL,
    "ticket_type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "codeForDiscount" TEXT,
    "discount" INTEGER,
    "discountType" TEXT,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("event_id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Events"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;
