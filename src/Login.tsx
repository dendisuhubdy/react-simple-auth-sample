import * as React from 'react'
import { returntypeof } from 'react-redux-typescript'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'   
import { login } from './actions'
import { State } from './types'

const component = ({ login, user }: Props) => (
    <div>
        <h1>Login</h1>
        <div>
            IsLoggedIn {user.isLoggedIn}
        </div>
        <button type="button" onClick={() => login("matt", "mazzola")}>Login</button>
    </div>
)

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        login
    }, dispatch)
}
const mapStateToProps = (state: State) => {
    return {
        user: state.user
    }
}

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);
type Props = typeof stateProps & typeof dispatchProps;

export default connect<typeof stateProps, typeof dispatchProps, {}>(mapStateToProps, mapDispatchToProps)(component);