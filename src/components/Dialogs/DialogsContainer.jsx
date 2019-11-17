import { addMessage } from '../../Redux/dialogPage-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialog: state.dialogPage.dialog,
        message: state.dialogPage.message,
        newMessageText: state.dialogPage.newMessageText,
        title: state.dialogPage.title,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs);
