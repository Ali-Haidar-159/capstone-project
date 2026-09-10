/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User Profile and Interest APIs
 */

/**
 * @swagger
 * /users/user-data:
 *   post:
 *     summary: Store user profile and interest data
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gmail
 *               - name
 *             properties:
 *               gmail:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               name:
 *                 type: string
 *                 example: "Ali"
 *               number:
 *                 type: string
 *                 example: "017XXXXXXXX"
 *               gender:
 *                 type: string
 *                 example: "Male"
 *               institute:
 *                 type: string
 *                 example: "ABC University"
 *               address:
 *                 type: string
 *                 example: "Dhaka, Bangladesh"
 *               department:
 *                 type: string
 *                 example: "CSE"
 *               profession:
 *                 type: string
 *                 example: "Student"
 *               sector:
 *                 type: string
 *                 example: "IT"
 *               topic:
 *                 type: string
 *                 example: "Web Development"
 *               educational_qualification:
 *                 type: string
 *                 example: "BSc in CSE"
 *     responses:
 *       201:
 *         description: User data is stored successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 201
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User data is stored successfully."
 *                 data:
 *                   type: object
 *       400:
 *         description: Error storing user data
 */

/**
 * @swagger
 * /users/user-data/{gmail}:
 *   get:
 *     summary: Get user profile and interest data by gmail
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: gmail
 *         schema:
 *           type: string
 *           format: email
 *         required: true
 *         description: Gmail of the user
 *     responses:
 *       200:
 *         description: User data found
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
 *                   example: "The user's gmail : user@example.com"
 *                 data:
 *                   type: object
 *                   properties:
 *                     gmail:
 *                       type: string
 *                       example: "user@example.com"
 *                     name:
 *                       type: string
 *                       example: "Ali"
 *                     mobile:
 *                       type: string
 *                       example: "017XXXXXXXX"
 *                     gender:
 *                       type: string
 *                       example: "Male"
 *                     userInterest:
 *                       type: object
 *                       properties:
 *                         profession:
 *                           type: string
 *                           example: "Student"
 *                         sector:
 *                           type: string
 *                           example: "IT"
 *                         topic:
 *                           type: string
 *                           example: "Web Development"
 *                         educational_qualification:
 *                           type: string
 *                           example: "BSc in CSE"
 *       400:
 *         description: User not found or error
*/



/**
 * @swagger
 * /users/registered-events:
 *   post:
 *     summary: Register a new event for a user
 *     description: User registered events are stored as array format in db.
 *     tags:
 *       - Registered Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gmail
 *               - events
 *             properties:
 *               gmail:
 *                 type: string
 *                 example: "haidar@gmail.com"
 *               events:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "101"
 *                   isAttend:
 *                     type: boolean
 *                     example: true
 *     responses:
 *       200:
 *         description: Event registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Event registered successfully.
 *                 data:
 *                   type: object
 *                   properties:
 *                     gmail:
 *                       type: string
 *                       example: "haidar@gmail.com"
 *                     events:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "101"
 *                         isAttend:
 *                           type: boolean
 *                           example: true
 *       400:
 *         description: Bad Request or Validation Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 400
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Find error to register event
 *                 error:
 *                   type: string
 *                   example: "Cannot destructure property 'gmail' of 'req.body' as it is undefined."
 */

/**
 * @swagger
 * /users/registered-events/{gmail}:
 *   get:
 *     summary: Get all registered events of a user
 *     description: Fetches all events that a user has registered for by their Gmail.
 *     tags:
 *       - Registered Events
 *     parameters:
 *       - name: gmail
 *         in: path
 *         required: true
 *         description: Gmail address of the user
 *         schema:
 *           type: string
 *           example: "haidar@gmail.com"
 *     responses:
 *       200:
 *         description: Successfully fetched registered events
 *         content:
 *           application/json:
 *             schema:
 *               
 *       400:
 *         description: Error fetching registered events
 *         content:
 *           application/json:
 *             schema:
 *               
 */

