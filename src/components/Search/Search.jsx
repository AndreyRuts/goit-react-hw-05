import { Formik, Form, Field } from 'formik';
import s from './Search.module.css';


const Search = ({ handleSearch }) => {
    const onSubmit = (values, { resetForm }) => {
        handleSearch(values.query);
        resetForm();
    };
    const initialValues = { query: '' };

    return (
        <div className={s.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Field
                        className={s.field}
                        name='query'
                        palceholder='Search movies...'
                    />
                    <button className={s.btn} type='submit'>
                        Search
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Search;