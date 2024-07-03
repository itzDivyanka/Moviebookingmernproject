// // backend/routes/userRoutes.js
// const express = require('express');
// const { protect, encryptSensitiveData, decryptSensitiveData } = require('../middleware/authMiddleware');
// const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// const router = express.Router();

// router.post('/register', encryptSensitiveData, registerUser);
// router.post('/login', encryptSensitiveData, loginUser);
// router.route('/profile')
//     .get(protect, decryptSensitiveData, getUserProfile)
//     .put(protect, encryptSensitiveData, updateUserProfile);

// module.exports = router;
// backend/routes/userRoutes.js
// const express = require('express');
// const { authUser, registerUser, getUserProfile } = require('../controllers/userController');

// const router = express.Router();
// const {
//     authUser,
//     registerUser,
//     getUserProfile,
// } = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/login', authUser);
// router.route('/').post(registerUser);
// router.route('/profile').get(protect, getUserProfile);

// module.exports = router;
// backend/routes/userRoutes.js
// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    authUser,
    registerUser,
    getUserProfile,
} = require('../controllers/userControllers'); // Ensure this path is correct
const { protect } = require('../middleware/authMiddleware');

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/').post(registerUser);

module.exports = router;
