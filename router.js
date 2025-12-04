import { Router } from "express";
import * as userController from "./controllers/user.js";
import * as participationsController from "./controllers/participations.js";
import * as votesController from "./controllers/votes.js";
import * as commentsController from "./controllers/comments.js";
import * as challengeController from "./controllers/challenge.js";
import * as authentificationController from "./controllers/authentification.js";
const router = Router();

/* Pour la connexion */
router.post("/auth/login", authentificationController.authentificationUser);


router.get("/user/me", authentificationController.authentificationUserByToken)
router.post("/user", userController.createUser)
router.put("/user/:id", userController.updateUserInfos);
router.get("/user/:id", userController.getUserById);

//Pour le challenge en cours
router.get("/challenge/current", challengeController.getCurrentChallenge);

// Pour les participations
router.post("/participations", participationsController.subParticipations);

//faire if pour les requetes de user et date et id challenge
router.get("/participations", participationsController.getParticipationByFilter);
router.get("/participations/:id", participationsController.getParticipationById);
router.delete("/participations/:id", participationsController.deleteParticipations);

// Pour les commentaires

router.get("/comments", commentsController.getAllComments);
router.post("/comments", commentsController.subComments);
router.get("/comments/:id", commentsController.getCommentsById);
router.put("/comments/:id", commentsController.updateComments);

// Pour les votes
router.post("/votes", votesController.subVotes);
router.get("/votes", votesController.getAllVotes)
router.get("/votes/:id", votesController.getVotesById)
 
// Admin testé 
router.post("/challenge", challengeController.subChallenge);

export default router;
