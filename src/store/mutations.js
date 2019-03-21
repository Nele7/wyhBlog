// import {HEAD_LINE} from './mutation_types'
import * as type from './mutation_types'
export default {
    [type.HEAD_LINE](state,headline){
        state.headline = headline
    }
}