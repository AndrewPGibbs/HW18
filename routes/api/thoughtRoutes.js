const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/applications
router.route('/')
.get(getApplications)
.post(createApplication);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleApplication)
  .put(updateApplication)
  .delete(deleteApplication);

// /api/applications/:applicationId/tags
router.route('/:applicationId/tags')
.post(addTag);

// /api/applications/:applicationId/tags/:tagId
router.route('/:applicationId/tags/:tagId')
.delete(removeTag);

module.exports = router;
