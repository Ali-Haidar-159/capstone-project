/**
 * @swagger
 * /clubs/create-club:
 *   post:
 *     summary: Create a new club
 *     description: Super Admin can create a new club by providing the necessary information like name, category, description, email, and assigned admin.
 *     tags:
 *       - Club
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clubName
 *               - category
 *               - description
 *               - clubEmail
 *               - clubAdmin
 *             properties:
 *               clubName:
 *                 type: string
 *                 example: "Tech Innovators"
 *               category:
 *                 type: string
 *                 example: "Technology"
 *               description:
 *                 type: string
 *                 example: "A club for tech enthusiasts focusing on innovation and development."
 *               clubEmail:
 *                 type: string
 *                 example: "techinnovators@university.edu"
 *               clubAdmin:
 *                 type: string
 *                 example: "admin123"
 *     responses:
 *       200:
 *         description: Club created successfully
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
 *                   example: Club Created Successfully. The newly created club is Tech Innovators.
 *                 data:
 *                   
 *       400:
 *         description: Error creating club
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
 *                   example: Find error to create club !
 *                 error:
 *                   type: string
 *                   example: Some error message
 */

/**
 * @swagger
 * /clubs/all:
 *   get:
 *     summary: Get all created clubs
 *     description: Returns a list of all the clubs created in the system.
 *     tags:
 *       - Club
 *     responses:
 *       200:
 *         description: Successfully retrieved all clubs
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
 *                   example: All the created clubs.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Club'
 *       400:
 *         description: Error retrieving clubs
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
 *                   example: Find error to get all club !
 *                 error:
 *                   type: string
 *                   example: Some error message
 */

/**
 * @swagger
 * /clubs/{id}:
 *   get:
 *     summary: Get single club by ID
 *     description: Retrieve detailed information about a specific club using its unique ID.
 *     tags:
 *       - Club
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the club
 *         schema:
 *           type: string
 *           example: "e9a1f6e3-5a54-4e82-9c8a-7651dcb12d00"
 *     responses:
 *       200:
 *         description: Successfully retrieved the club
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
 *                   example: Find the club
 *                 data:
 *                  
 *       400:
 *         description: Club not found or invalid ID
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
 *                   example: There is no club with this id !
 *                 error:
 *                   type: string
 *                   example: Some error message
 */

/**
 * @swagger
 * /clubs/delete/{id}:
 *   get:
 *     summary: Delete a club by ID
 *     description: Permanently delete a club from the system using its unique ID. Only authorized users should have access to this endpoint.
 *     tags:
 *       - Club
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the club to delete
 *         schema:
 *           type: string
 *           example: "e9a1f6e3-5a54-4e82-9c8a-7651dcb12d00"
 *     responses:
 *       200:
 *         description: Club deleted successfully
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
 *                   example: Club deleted successfully
 *                 data:
 *                   
 *       400:
 *         description: Error deleting club or invalid ID
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
 *                   example: Find error to delete this club !
 *                 error:
 *                   type: string
 *                   example: Some error message
 */








