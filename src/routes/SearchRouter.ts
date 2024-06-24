import { Router } from 'express';
import { Search } from '../features';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.post('/autocomplete', Search.autoComplete);
router.post('/', Search.getAll);

/**
 * @export {express.Router}
 */
export default router;