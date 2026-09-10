/**
 * @swagger
 * /auth/admin:
 *   post:
 *     summary: Admin Login
 *     tags:
 *       - Authentication Admin
 *     description: Allows an admin to log in using club_id and password. Returns admin data and session on success.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - club_id
 *               - password
 *             properties:
 *               club_id:
 *                 type: string
 *                 example: "club123"
 *                 description: Unique ID of the club assigned to admin
 *               password:
 *                 type: string
 *                 example: "adminPassword123"
 *                 description: Admin password
 *     responses:
 *       200:
 *         description: Admin logged in successfully
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
 *                   description: Logged-in admin object
 *       400:
 *         description: Login failed (wrong credentials)
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
 *                   example: "Admin not found !!!"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Error logging in admin"
 *                 error:
 *                   type: string
 *                   example: "Database connection error"
 */
