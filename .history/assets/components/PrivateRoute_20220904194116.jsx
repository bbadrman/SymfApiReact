


const PrivateRoute = ({ path, component }) => {
    const { isAuthenticated } = useContext(AuthContext);
   
    return isAuthenticated ? (
    <Route path={path} component={component} />
    ) : (
    <Redirect to="/login" />
    );
};