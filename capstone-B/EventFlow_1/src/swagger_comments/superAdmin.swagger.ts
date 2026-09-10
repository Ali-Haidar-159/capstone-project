/**
 * @swagger
 * /auth/super-admin:
 *   post:
 *     summary: Super Admin Login
 *     tags:
 *       - Authentication Super Admin
 *     description: Authenticate the Super Admin using Gmail, User ID, and Password. Returns a success message on correct credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gmail
 *               - userId
 *               - password
 *             properties:
 *               gmail:
 *                 type: string
 *                 example: "super.admin.ewu@gmail.com"
 *                 description: Super Admin's official Gmail
 *               userId:
 *                 type: string
 *                 example: "east-west-university"
 *                 description: Unique user ID of the super admin
 *               password:
 *                 type: string
 *                 example: "super-ewu"
 *                 description: Super Admin's password
 *     responses:
 *       200:
 *         description: Super Admin successfully logged in
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
 *                   example: "Successfully logged in super-admin"
 *       400:
 *         description: Invalid credentials or authentication failed
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
 *                   example: "Find error to authenticate super admin !"
 *                 error:
 *                   type: string
 *                   example: "Password is incorrect !"
 */
