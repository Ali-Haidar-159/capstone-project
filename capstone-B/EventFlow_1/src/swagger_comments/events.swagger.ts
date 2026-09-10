
// ====== Create Event =======

/**
 * @swagger
 *  /events/create-event:
 *   post:
 *     summary: Create a new event along with its ticket
 *     tags:
 *       - Events
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Array of image files for the event
 *               event:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   category:
 *                     type: string
 *                   club_name:
 *                     type: string
 *                   date:
 *                     type: string
 *                     format: date
 *                   location:
 *                     type: string
 *                   venue:
 *                     type: string
 *                   total_seat:
 *                     type: integer
 *                 required:
 *                   - title
 *                   - category
 *                   - club_name
 *                   - date
 *                   - location
 *                   - venue
 *                   - total_seat
 *               ticket:
 *                 type: object
 *                 properties:
 *                   ticket_name:
 *                     type: string
 *                   ticket_type:
 *                     type: string
 *                   ticket_description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   codeForDiscount:
 *                     type: string
 *                   discount:
 *                     type: number
 *                   discountType:
 *                     type: string
 *                 required:
 *                   - ticket_name
 *                   - ticket_type
 *                   - price
 *     responses:
 *       201:
 *         description: New Event and Ticket created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     newEvent:
 *                       
 *                     newEventTicket:
 *                      
 *       400:
 *         description: Error while creating event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */



// ====== get single Event =======


/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get single event by event ID
 *     description: Returns detailed information about a specific event based on its unique event ID.
 *     tags: 
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique event ID
 *         schema:
 *           type: string
 *           example: "evt_12345"
 *     responses:
 *       200:
 *         description: Successfully found the event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Find the event
 *                 data:
 *                   type: object
 *                   description: Event data returned from database
 *                   properties:
 *                     event_id:
 *                       type: string
 *                       example: "evt_12345"
 *                     event_name:
 *                       type: string
 *                       example: "AI Innovation Summit"
 *                     club_id:
 *                       type: string
 *                       example: "club_67890"
 *                     seat_capacity:
 *                       type: number
 *                       example: 150
 *                     registration_fee:
 *                       type: number
 *                       example: 100
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-11-12T10:45:30Z"
 *       400:
 *         description: No event found or invalid event ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: No event found by this event id !
 *       500:
 *         description: Internal server error or Prisma query failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Find error to get event !
 */


// ====== get all approved Events =======


/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all approved events
 *     description: Fetch all events that have been approved by the admin .
 *     tags: 
 *       - Events
 *     responses:
 *       200:
 *         description: Successfully fetched all approved events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Find all approved the event
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       event_id:
 *                         type: string
 *                         example: "evt_12345"
 *                       event_name:
 *                         type: string
 *                         example: "Web Development Bootcamp"
 *                       club_id:
 *                         type: string
 *                         example: "club_67890"
 *                       seat_capacity:
 *                         type: number
 *                         example: 100
 *                       registration_fee:
 *                         type: number
 *                         example: 50
 *                       isApprove:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-11-12T10:45:30Z"
 *       400:
 *         description: No approved events found or query failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: No event found!
 *       500:
 *         description: Internal server error or Prisma database issue
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Find error to get event !
 */


// ====== get all the Events of a particular club =======


/**
 * @swagger
 * /events/club-event/{id}:
 *   get:
 *     summary: Get all events of a specific club
 *     description: Fetch all events that belong to a specific club using the club ID.
 *     tags:
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique club ID
 *         schema:
 *           type: string
 *           example: "club_12345"
 *     responses:
 *       200:
 *         description: Successfully fetched all events of this club
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Found all events of this club
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       event_id:
 *                         type: string
 *                         example: "evt_12345"
 *                       event_name:
 *                         type: string
 *                         example: "Tech Carnival 2025"
 *                       club_name:
 *                         type: string
 *                         example: "Electrical Circuit CSE"
 *                       seat_capacity:
 *                         type: number
 *                         example: 100
 *                       registration_fee:
 *                         type: number
 *                         example: 50
 *                       isApporve:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-11-12T10:45:30Z"
 *       400:
 *         description: Club not found or no events found for the club
 *       500:
 *         description: Internal server or Prisma database error
 */

// ====== Delete a single Event by id =======


/**
 * @swagger
 * /events/delete/{id}:
 *   get:
 *     summary: Delete a specific event by its ID
 *     description: Permanently delete a specific event from the database using its unique event ID.
 *     tags:
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique event ID
 *         schema:
 *           type: string
 *           example: "evt_12345"
 *     responses:
 *       200:
 *         description: Event successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Deleted the event
 *                 data:
 *                   type: object
 *                   description: The deleted event data
 *                   properties:
 *                     event_id:
 *                       type: string
 *                       example: "evt_12345"
 *                     event_name:
 *                       type: string
 *                       example: "AI Conference 2025"
 *                     club_name:
 *                       type: string
 *                       example: "Electrical Circuit CSE"
 *                     registration_fee:
 *                       type: number
 *                       example: 200
 *                     seat_capacity:
 *                       type: number
 *                       example: 150
 *                     isApporve:
 *                       type: boolean
 *                       example: true
 *       400:
 *         description: Event not found or invalid event ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: No event found by this event id !
 *       500:
 *         description: Internal server or Prisma database error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Find error to delete event !
 */



// ====== Approve a single Event by id =======

/**
 * @swagger
 * /events/approve/{id}:
 *   put:
 *     summary: Approve an event
 *     tags:
 *       - Events
 *     description: Approves an event based on the provided event ID. Only admins or authorized users should access this endpoint.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the event to approve
 *         schema:
 *           type: string
 *           example: "evt_123456789"
 *     responses:
 *       200:
 *         description: Event approved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Approved the event"
 *                 data:
 *                   type: object
 *                   description: Updated event data
 *       400:
 *         description: Event approval failed or event not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No event found by this event id !"
 *                 error:
 *                   type: string
 *                   example: "Event not found"
 *       500:
 *         description: Internal server error
 */


// ====== Get event Recommendation =======


/**
 * @swagger
 * /events/recommendation:
 *   get:
 *     summary: Get event recommendations for the logged-in user
 *     description: This endpoint returns personalized event recommendations based on the logged-in user's interests, department, hobbies, and previous event data.
 *     tags:
 *       - Events
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Successfully generated recommendations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "user@gmail.com"
 *                 data:
 *                   type: array
 *                   description: List of recommended events
 *                   items:
 *                     $ref: '#/components/schemas/Event'
 *
 *       401:
 *         description: Unauthorized access - User is not logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "You are not logged in!"
 *
 *       400:
 *         description: Failed to generate recommendation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Find error in recommendation!"
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */




