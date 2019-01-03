import { connect } from "react-redux";
import component from "./component";
import { chamgeIamge } from "./store/image.actions";

const mapStateToProps = state => ({
  imageURL: state.imageURL
});

const mapDispatchToProps = dispatch => ({
  changeImage: imageURL => dispatch(chamgeIamge(imageURL))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
