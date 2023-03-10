import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Consumer } from "../../context/AuthContext";

class PrivateRoute extends Component {
    render() {
        return (
            <Consumer>
                {({ token }) => {
                    const {children} = this.props
                    if (!token) {
                        return <Navigate to="/login" />
                    }
                    return children
                }}
            </Consumer>
        )
    }
}

export default PrivateRoute