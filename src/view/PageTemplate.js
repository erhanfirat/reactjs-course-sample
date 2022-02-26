import "./PageTemplate.css";

const PageTemplate = ({ title, children }) => {
    return <div className='page-template'>
        <h2>{title}</h2>
        <hr />
        {children}
    </div>
}

export default PageTemplate;