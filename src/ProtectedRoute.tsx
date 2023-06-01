import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

type protect={
    user:any,
    children:React.ReactNode
}

const ProtectedRoute = (props: protect) => {
  if (!props.user[0].name) {
    console.log("hello");
    return <Navigate to={"/join"} />;
  } else {
    return props.children;
  }
};
const mapStateToProps = (state: any) => {
  return {
    user: state.User.user,
  };
};
export default connect(mapStateToProps)(ProtectedRoute);
