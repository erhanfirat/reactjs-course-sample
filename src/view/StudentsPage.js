import PageTemplate from './PageTemplate';
import StudentList from './../components/function/StudentList/StudentList';
import { useEffect } from 'react';
import { doRequest } from '../api/api';
import { getStudentsRequest } from '../api/endpoints';
import { bulkInsertStudentsAction, resetStudentsAction } from '../state/actionCreators/actionCreator';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../state';
import { bindActionCreators } from 'redux';

const StudentsPage = () => {
    const dispatch = useDispatch();
    const {
        bulkInsertStudentsAction,
        resetStudentsAction } = bindActionCreators(actionCreator, dispatch);

    useEffect(() => {
        doRequest(getStudentsRequest)
            .then(res => {
                resetStudentsAction();
                bulkInsertStudentsAction(res);
            });
    })

    return <PageTemplate title={"Students"}>
        <StudentList />
    </PageTemplate >
}

export default StudentsPage;