import "./error.css";
const Error = (props) => {
    return (
        <div className="error-container">
            <div style={{fontSize: props.fontSize}} className="error">{props.msg}</div>
            {/* <img className="gif" src="/wip1.gif" alt="work in progress"/> */}
        </div>
    )
}

export default Error;