import PageTemplate from './PageTemplate';
import StudentForm from './../components/function/StudentList/StudentForm';
import { useParams } from "react-router-dom";

const StudentFormPage = () => {
    const { id } = useParams();

    return <PageTemplate title={`Student ${id ? "Edit" : "Create"} Form`}>
        <StudentForm id={id} />
    </PageTemplate >
}

export default StudentFormPage;