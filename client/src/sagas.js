import { all } from 'redux-saga/effects'
import FiveDaySaga from './components/FiveDay/saga'
import FavoritesSaga from './components/Favorites/saga';
import SearchSaga from './components/Search/saga';

export default function* Sagas() {
    yield all([
        FiveDaySaga(),
        FavoritesSaga(),
        SearchSaga(),
    ])
}
