/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gmail
 *               - password
 *             properties:
 *               gmail:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: New user account is created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "New user account is created"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     gmail:
 *                       type: string
 *                       example: "user@example.com"
 *                     password:
 *                       type: string
 *                       example: "$2b$10$..."
 *       500:
 *         description: Error registering new user
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *       - Authentication User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gmail
 *               - password
 *             properties:
 *               gmail:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     gmail:
 *                       type: string
 *                       example: "user@example.com"
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Error logging in user
 */



/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout the currently authenticated user or admin or super-admin
 *     tags:
 *       - Logout
 *     description: Logs out the user using Passport's logout method and redirects to the home page.
 *     responses:
 *       200:
 *         description: User successfully logged out and redirected.
 *       400:
 *         description: Failed to logout due to an internal error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Find error to logout !"
 *                 error:
 *                   type: string
 *                   example: "Some error message"
 *       500:
 *         description: Server error while logging out.
 */











